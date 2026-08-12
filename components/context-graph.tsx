"use client";

import { useEffect, useRef } from "react";

/* Live context graph for the hero.
 *
 * Nodes drift continuously and edges are drawn between any pair that
 * happens to fall within a threshold distance, so the graph is always
 * re-forming rather than being a fixed diagram. That is the point: the
 * product's claim is a context graph that keeps updating as a deployment
 * moves, and a static illustration would undercut it.
 *
 * Moving the cursor pulls nearby nodes in and links them to the pointer,
 * which reads as querying the graph and pulling the relevant context to
 * you. Canvas rather than SVG because edge count is O(n^2) per frame and
 * this would thrash the DOM as elements.
 */

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Base radius; hubs are drawn larger and darker. */
  r: number;
  hub: boolean;
  /** Gives every node a slightly different wandering direction. */
  phase: number;
};

const ACCENT = "37, 99, 235";

export default function ContextGraph({
  className = "",
  animated = true,
}: {
  className?: string;
  /** When false, paints one still frame and skips the loop and pointer
   *  interaction. Used where the graph is decoration rather than the
   *  focal point, so two live canvases never run at once. */
  animated?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false, lastMove: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      !animated ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let frame = 0;
    let lastFrame = performance.now();

    /* Distance at which two nodes are considered related. Scaled a little
       with viewport so the graph doesn't turn into a solid mesh on large
       screens or a sparse dust cloud on small ones. */
    let linkDist = 150;
    const pointerDist = 190;

    function seed() {
      // Roughly one node per 11k px^2, clamped so the density stays sane.
      const target = Math.round((width * height) / 11000);
      const count = Math.max(48, Math.min(160, target));
      linkDist = Math.max(125, Math.min(190, Math.hypot(width, height) / 9.5));

      nodes = Array.from({ length: count }, () => {
        const hub = Math.random() < 0.16;
        const angle = Math.random() * Math.PI * 2;
        // A small minimum speed prevents freshly seeded nodes from looking
        // pinned in place. This is intentionally only a touch quicker than
        // the previous ambient drift.
        const speed = 0.12 + Math.random() * 0.1;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: hub ? 2.2 + Math.random() * 1.6 : 1 + Math.random() * 1.1,
          hub,
          phase: Math.random() * Math.PI * 2,
        };
      });
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      // Assigning width/height also clears the canvas.
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      // With motion reduced there is no rAF loop to repaint after that
      // clear, so the single static frame has to be re-drawn here or the
      // graph disappears the first time ResizeObserver fires.
      if (reduceMotion) draw();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;

      // Edges between nearby nodes.
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > linkDist) continue;
          const alpha = (1 - d / linkDist) * 0.3;
          ctx!.strokeStyle = `rgba(${ACCENT}, ${alpha.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      // Edges from the pointer to whatever is near it.
      if (pointer.active) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - pointer.x, n.y - pointer.y);
          if (d > pointerDist) continue;
          const alpha = (1 - d / pointerDist) * 0.55;
          ctx!.strokeStyle = `rgba(${ACCENT}, ${alpha.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(pointer.x, pointer.y);
          ctx!.lineTo(n.x, n.y);
          ctx!.stroke();
        }
      }

      // Nodes on top of the edges.
      for (const n of nodes) {
        const near = pointer.active
          ? Math.hypot(n.x - pointer.x, n.y - pointer.y) < pointerDist
          : false;
        const alpha = n.hub ? 0.55 : 0.34;
        ctx!.fillStyle = `rgba(${ACCENT}, ${near ? alpha + 0.28 : alpha})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function step(now: number) {
      const pointer = pointerRef.current;
      const dt = Math.min(2, Math.max(0.5, (now - lastFrame) / 16.667));
      lastFrame = now;
      frame += 1;

      // A stationary cursor used to remain an attractor forever. Nodes would
      // collapse onto it and settle into a stable orbit. Release the field
      // shortly after real pointer movement stops so the graph always resumes
      // its ambient motion without requiring pointerleave to fire.
      if (pointer.active && now - pointer.lastMove > 700) {
        pointer.active = false;
      }

      // Short-range separation gives overlapping nodes a way out even while
      // the pointer is moving. Running every other frame keeps the additional
      // pair work light while still resolving a cluster quickly.
      if (frame % 2 === 0) {
        const separation = 24;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.hypot(dx, dy);
            if (d >= separation) continue;
            if (d < 0.01) {
              const angle = Math.random() * Math.PI * 2;
              dx = Math.cos(angle);
              dy = Math.sin(angle);
              d = 1;
            }
            const push = (1 - d / separation) * 0.018 * dt;
            const px = (dx / d) * push;
            const py = (dy / d) * push;
            a.vx += px;
            a.vy += py;
            b.vx -= px;
            b.vy -= py;
          }
        }
      }

      for (const n of nodes) {
        // Low-amplitude steering makes the drift feel organic and ensures a
        // perfectly radial post-interaction velocity cannot stay locked.
        n.vx += Math.cos(now * 0.00032 + n.phase) * 0.00045 * dt;
        n.vy += Math.sin(now * 0.00029 + n.phase) * 0.00045 * dt;

        // Pull toward the cursor through most of its field, but repel inside
        // the core. The hollow center is the mechanical escape hatch that
        // prevents every node from converging to the exact same point.
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.hypot(dx, dy);
          const coreRadius = 42;
          if (d < coreRadius) {
            const angle = d > 0.01 ? Math.atan2(dy, dx) : n.phase;
            const push = (1 - d / coreRadius) * 0.07 * dt;
            n.vx -= Math.cos(angle) * push;
            n.vy -= Math.sin(angle) * push;
          } else if (d < pointerDist) {
            // Ramp the pull up outside the core instead of switching from a
            // strong inward force to outward force at one sharp boundary.
            const coreRamp = Math.min(1, (d - coreRadius) / 50);
            const pull = (1 - d / pointerDist) * 0.04 * coreRamp;
            n.vx += (dx / d) * pull * dt;
            n.vy += (dy / d) * pull * dt;
          }
        }

        // Cap speed so the pointer pull can't fling nodes off.
        const speed = Math.hypot(n.vx, n.vy);
        const max = 0.68;
        if (speed > max) {
          n.vx = (n.vx / speed) * max;
          n.vy = (n.vy / speed) * max;
        } else if (!pointer.active && speed < 0.09) {
          const angle = speed > 0.001 ? Math.atan2(n.vy, n.vx) : n.phase;
          n.vx = Math.cos(angle) * 0.09;
          n.vy = Math.sin(angle) * 0.09;
        }

        n.x += n.vx * dt;
        n.y += n.vy * dt;

        // Bounce rather than wrap, so edges never snap across the canvas.
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      draw();
      raf = requestAnimationFrame(step);
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
        lastMove: performance.now(),
      };
    }

    function onPointerLeave() {
      pointerRef.current.active = false;
    }

    // resize() paints the static frame itself when motion is reduced.
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pointer tracking only matters while something is repainting.
    if (!reduceMotion) {
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [animated]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
