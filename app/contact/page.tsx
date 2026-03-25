export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-teal-600">CONTACT</p>
        <h1 className="mt-4 text-4xl font-black text-zinc-900 dark:text-white md:text-5xl">
          Ready when you’re building something intentional.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Send over a brief, ask for a design critique, or collaborate on a sprint. I’m here for front-end builds that need craft, clarity, and personality.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-base text-zinc-700 dark:text-zinc-200">
            Tell me about your target audience, the experience you’re chasing, or the components you can’t figure out. I’ll respond with ideas, timelines, and how we can make it feel uniquely “you.”
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="mailto:barromrvn@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <span className="text-2xl">📧</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Email</p>
              <p className="mt-1 text-lg font-semibold">barromrvn@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+639150380805"
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm transition hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <span className="text-2xl">📞</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Phone</p>
              <p className="mt-1 text-lg font-semibold">+63 915 038 8050</p>
            </div>
          </a>

          <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-left text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Location</p>
              <p className="mt-1 text-lg font-semibold">Ibabao, Cordova, Cebu</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 py-4">
          <a
            href="https://www.facebook.com/maviiiqtty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <span className="text-lg">📘</span>
            Facebook
          </a>

          <a
            href="https://github.com/mavii-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <span className="text-lg">🐙</span>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
