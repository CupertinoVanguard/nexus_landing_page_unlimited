import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/ui/header";
import { getPost, posts, ContentBlock } from "@/lib/blogs";

const NAVY = "#1e3a5f";
const BLUE = "#2d6a9f";

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
      <p className="text-gray-600 leading-relaxed mb-4 text-base">{block.text}</p>
    );
  }
  return (
    <ul className="mb-4 space-y-2 pl-1">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3 text-gray-600 text-base leading-relaxed">
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
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
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24 pb-24">

        {/* Back link */}
        <div className="mx-auto max-w-5xl px-6 sm:px-10 pt-6 mb-10">
          <Link
            href="/blogs"
            className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
          >
            ← All Posts
          </Link>
        </div>

        {/* Post header — centered */}
        <div className="mx-auto max-w-2xl px-6 sm:px-10 text-center mb-10">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: BLUE }}
          >
            {post.tags.join(" • ")}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 mb-6 leading-relaxed">{post.subtitle}</p>

          {/* Author meta */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold flex-shrink-0"
              style={{ background: NAVY }}
            >
              {post.author.initials}
            </span>
            <span className="font-medium text-gray-700">{post.author.name}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured image */}
        <div className="mx-auto max-w-4xl px-6 sm:px-10 mb-14">
          <div className="w-full h-52 sm:h-72 rounded-sm overflow-hidden">
            <img
              src="/images/evalagent.jpg"
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Two-column: TOC + content */}
        <div className="mx-auto max-w-5xl px-6 sm:px-10 flex flex-col md:flex-row gap-12">

          {/* Sticky TOC */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                On This Page
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#summary"
                    className="text-sm text-gray-400 hover:text-gray-900 transition-colors leading-snug block"
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
                        className="text-sm text-gray-400 hover:text-gray-900 transition-colors leading-snug block"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          {/* Article body */}
          <article className="flex-1 min-w-0 max-w-2xl">

            {/* Summary box */}
            <div
              id="summary"
              className="mb-10 scroll-mt-28 border-l-4 pl-5 py-1"
              style={{ borderColor: BLUE }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: BLUE }}
              >
                Summary
              </p>
              <ul className="space-y-2">
                {post.summary.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: BLUE }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            {post.sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-10 scroll-mt-28">
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            ))}

            {/* Back link */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link
                href="/blogs"
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors"
              >
                ← All Posts
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
