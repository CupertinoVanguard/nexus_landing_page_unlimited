import Link from "next/link";
import { posts } from "@/lib/blogs";

export const metadata = {
  title: "Blog — Nexus",
  description: "Insights and updates from the Nexus team.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-bg pb-24 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14 max-w-3xl sm:mb-16">
          <p className="eyebrow text-accent">Blog</p>
          <h1 className="mt-4 text-[40px] font-normal leading-[1.05] tracking-[-0.035em] text-fg sm:text-[56px]">
            Insights &amp; updates
          </h1>
          <p className="mt-5 max-w-2xl font-mono text-[15px] leading-relaxed text-fg-muted">
            Perspectives on agents, deployment context, and the systems teams
            build around them.
          </p>
        </div>

        <ul className="border-t border-edge">
          {posts.length === 0 ? (
            <li className="py-12 font-mono text-sm text-fg-subtle">
              Posts coming soon.
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.slug} className="border-b border-edge">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group -mx-4 grid gap-6 rounded-md px-4 py-8 transition-colors hover:bg-surface sm:grid-cols-[224px_minmax(0,1fr)] sm:items-start sm:gap-9 sm:py-10"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-md border border-edge bg-surface sm:aspect-[16/10]">
                    <img
                      src={post.coverImage ?? "/images/evalagent.jpg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      {post.tags.join(" · ")}
                    </p>
                    <h2 className="mb-3 text-[24px] font-normal leading-tight tracking-[-0.025em] text-fg transition-colors group-hover:text-accent sm:text-[30px]">
                      {post.title}
                    </h2>
                    <p className="mb-5 line-clamp-2 max-w-3xl text-[15px] leading-relaxed text-fg-muted">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-fg-subtle">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fg text-[9px] font-medium text-bg">
                        {post.author.initials}
                      </span>
                      <span className="text-fg-muted">{post.author.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
