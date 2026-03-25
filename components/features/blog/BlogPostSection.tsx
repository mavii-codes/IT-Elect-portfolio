import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/portfolio-data";

type BlogPostSectionProps = {
  slug: string;
};

export default function BlogPostSection({ slug }: BlogPostSectionProps) {
  const post = blogPosts.find((blogPost) => blogPost.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
      >
        ← Back to blog
      </Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        {post.category}
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>
      <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-zinc-500">
        Published on {post.date}
      </div>
    </section>
  );
}
