import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-teal-600">ABOUT MARVIN</p>
        <h1 className="mt-4 text-5xl font-black leading-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
          I move sections around like puzzle pieces until the story feels right.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Hi, I’m Marvin Barro — an aspiring frontend developer building modern, flexible layouts for portfolios, landing pages, and product ideas. My approach: think like a designer, code like an engineer, and keep empathy at the center.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Outside of code, I lean on music and gaming to recharge, drawing inspiration from pacing, color palettes, and storytelling. All of that informs how I re-arrange interfaces to feel balanced and memorable.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/projects" className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700">
            Browse projects
          </a>
          <a href="/skills" className="rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800">
            Skillset map
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-3xl border-4 border-zinc-900 p-2 dark:border-zinc-100">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-zinc-950">
            <Image
              src="/about.jpg"
              alt="Marvin Barro profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">CURRENTLY FOCUSED ON</p>
          <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Immersive landing revamps</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Pairing Tailwind CSS, Framer Motion, and React Router to choreograph layouts.
          </p>
        </div>
      </div>
    </section>
  );
}
