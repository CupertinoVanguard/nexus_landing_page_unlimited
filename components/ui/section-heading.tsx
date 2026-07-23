export default function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-nacelle text-[28px] font-normal leading-[1.15] tracking-[-0.03em] text-fg md:text-[38px]">
        {title}
      </h2>
      {body && (
        <p className="mx-auto mt-5 max-w-xl font-mono text-[13px] leading-relaxed text-fg-muted">
          {body}
        </p>
      )}
    </div>
  );
}
