import Link from "next/link";
import ProfileCard from "./ProfileCard";

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20">
      <div>
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-teal-600 dark:text-teal-400">
          MARVIN BARRO • FRONTEND ART DIRECTION
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Interfaces that feel curated, precise, and alive.
        </h1>

        <p className="mb-4 text-lg text-zinc-600 dark:text-zinc-400">
          Currently crafting{" "}
          <span className="font-medium text-teal-600 dark:text-teal-400">
            responsive design
          </span>
        </p>

        <p className="mb-8 text-lg italic text-zinc-600 dark:text-zinc-400">
          Your vision, my code.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Explore work
          </Link>

        </div>
      </div>

      <ProfileCard />
    </section>
  );
}
