"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts } from "@/lib/portfolio-data";

const categoryOptions = ["all", "design", "development", "ui-ux"] as const;

export default function BlogListSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categoryOptions)[number]>("all");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatches =
        selectedCategory === "all" || post.category === selectedCategory;
      const textMatches = `${post.title} ${post.excerpt}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return categoryMatches && textMatches;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-[0.2em] text-teal-600 dark:text-teal-400">
          WRITING
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Notes on frontend design, Next.js architecture, and building a portfolio
          that stays easy to maintain.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Dynamic routes:{" "}
          <Link
            href="/category/design/writing"
            className="font-medium text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
          >
            category paths
          </Link>{" "}
          ·{" "}
          <Link
            href="/date/2026/03"
            className="font-medium text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
          >
            date filter
          </Link>
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none ring-teal-500/0 transition placeholder:text-zinc-400 focus:ring-2 focus:ring-teal-500/30 dark:text-zinc-100 md:max-w-md"
        />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(
              event.target.value as (typeof categoryOptions)[number],
            )
          }
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-zinc-900 shadow-sm dark:text-zinc-100"
        >
          {categoryOptions.map((categoryOption) => (
            <option key={categoryOption} value={categoryOption}>
              {categoryOption === "all" ? "All categories" : categoryOption}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-[24px] border border-[var(--border)] bg-[var(--card)]/90 p-6 shadow-sm backdrop-blur-sm transition hover:border-teal-300/50 dark:hover:border-teal-700/50"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {post.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
            <p className="mt-4 text-xs text-zinc-500">{post.date}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex w-fit text-sm font-medium text-teal-600 underline-offset-4 hover:underline dark:text-teal-400"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
