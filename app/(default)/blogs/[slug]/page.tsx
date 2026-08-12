import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, ContentBlock } from "@/lib/blogs";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Nexus Blog`, description: post.subtitle };
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="mb-5 text-[16px] leading-[1.75] text-fg-muted sm:text-[17px]">
        {block.text}
      </p>
    );
  }
  if (block.type === "image") {
    return (
      <figure className="my-10">
        <div className="w-full overflow-hidden rounded-md border border-edge bg-surface">
          <img
            src={block.src}
            alt={block.alt}
            className="h-auto w-full object-contain"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-center font-mono text-[11px] leading-relaxed text-fg-subtle">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  if (block.type === "image-comparison") {
    return (
      <figure className="my-10 -mx-4 sm:-mx-8 md:-mx-12">
        <div className="flex flex-col gap-6">
          {block.images.map((img, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent sm:px-8 md:px-12">
                {img.label}
              </span>
              <div className="w-full overflow-hidden rounded-md border border-edge bg-surface">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {block.caption && (
          <figcaption className="mt-5 px-4 text-center font-mono text-[11px] leading-relaxed text-fg-subtle sm:px-8 md:px-12">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <ul className="mb-6 space-y-3 pl-1">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-[1.75] text-fg-muted sm:text-[17px]">
          <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-bg pb-24 pt-28 sm:pb-28 sm:pt-32">

        <div className="mx-auto mb-12 max-w-7xl px-6 pt-6 sm:px-10">
          <Link
            href="/blogs"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle transition-colors hover:text-accent"
          >
            &larr; All posts
          </Link>
        </div>

        <header className="mx-auto mb-12 max-w-4xl px-6 sm:px-10">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {post.tags.join(" · ")}
          </p>
          <h1 className="mb-5 text-[38px] font-normal leading-[1.06] tracking-[-0.035em] text-fg sm:text-[52px] md:text-[60px]">
            {post.title}
          </h1>
          <p className="mb-7 max-w-3xl font-mono text-[15px] leading-relaxed text-fg-muted">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-fg-subtle">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-fg text-[10px] font-medium text-bg">
              {post.author.initials}
            </span>
            <span className="text-fg-muted">{post.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="mx-auto mb-16 max-w-6xl px-6 sm:px-10">
          <div className="aspect-[16/8] w-full overflow-hidden rounded-md border border-edge bg-surface">
            <img
              src={post.coverImage ?? "/images/evalagent.jpg"}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 md:flex-row md:gap-16">

          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
                On this page
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#summary"
                    className="block text-[13px] leading-snug text-fg-subtle transition-colors hover:text-accent"
                  >
                    Summary
                  </a>
                </li>
                {post.sections
                  .filter((s) => s.heading)
                  .map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-[13px] leading-snug text-fg-subtle transition-colors hover:text-accent"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          <article className="min-w-0 max-w-3xl flex-1">

            <div
              id="summary"
              className="mb-12 scroll-mt-28 rounded-md border border-edge bg-surface px-6 py-6 sm:px-7"
            >
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Summary
              </p>
              <ul className="space-y-3">
                {post.summary.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-fg-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                {section.heading && (
                  <h2 className="mb-5 text-[26px] font-normal tracking-[-0.025em] text-fg sm:text-[32px]">
                    {section.heading}
                  </h2>
                )}
                {section.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}

            <div className="mt-12 border-t border-edge pt-8">
              <Link
                href="/blogs"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle transition-colors hover:text-accent"
              >
                &larr; All posts
              </Link>
            </div>
          </article>
        </div>
    </div>
  );
}
