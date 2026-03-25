import Link from "next/link";

type DateFilterSectionProps = {
  filter?: string[];
};

export default function DateFilterSection({ filter }: DateFilterSectionProps) {
  const selectedFilter = filter?.length ? filter.join(" / ") : "All dates";

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-teal-600 dark:text-teal-400">
        ARCHIVE
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
        Date filter
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Optional catch-all:{" "}
        <span className="font-mono text-sm text-teal-700 dark:text-teal-300">
          /date/[[...filter]]
        </span>
      </p>
      <p className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 px-5 py-4 text-zinc-800 dark:text-zinc-200">
        Current scope:{" "}
        <span className="font-medium">{selectedFilter}</span>
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
      >
        ← Back to blog
      </Link>
    </section>
  );
}
