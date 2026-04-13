import Link from "next/link";
import Header from "@/components/ui/header";
import { posts } from "@/lib/blogs";

const NAVY = "#1e3a5f";
const BLUE = "#2d6a9f";

export const metadata = {
  title: "Blog — Nexus",
  description: "Insights and updates from the Nexus team.",
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">

          {/* Hero */}
          <div className="mb-14 border-b border-gray-200 pb-10">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BLUE }}
            >
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
              Insights &amp; Updates
            </h1>
            <p className="mt-3 text-gray-500 text-lg">
              Perspectives on agents, reliability and monitoring.
            </p>
          </div>

          {/* Post list */}
          <ul className="divide-y divide-gray-200">
            {posts.length === 0 ? (
              <li className="py-12 text-gray-400">Posts coming soon.</li>
            ) : (
              posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="group flex flex-col gap-4 py-10 transition-colors hover:bg-stone-50 -mx-4 px-4 rounded-sm sm:flex-row sm:items-start sm:gap-8"
                  >
                    {/* Thumbnail */}
                    <div className="hidden sm:block flex-shrink-0 w-48 h-28 rounded-sm overflow-hidden">
                      <img
                        src={post.coverImage ?? "/images/evalagent.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Tags */}
                      <p
                        className="mb-2 text-xs font-bold uppercase tracking-widest"
                        style={{ color: BLUE }}
                      >
                        {post.tags.join(" • ")}
                      </p>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:underline underline-offset-2 leading-snug mb-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Author meta */}
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span
                          className="flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-bold flex-shrink-0"
                          style={{ background: NAVY }}
                        >
                          {post.author.initials}
                        </span>
                        <span className="font-medium text-gray-600">{post.author.name}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
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
    </>
  );
}
