import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 px-5 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-white/50 dark:from-emerald-800 dark:via-teal-800 dark:to-sky-900 dark:text-zinc-100 dark:ring-white/10"
          >
            Portfolio
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:justify-end sm:text-sm md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-wide text-zinc-600 transition-colors hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
