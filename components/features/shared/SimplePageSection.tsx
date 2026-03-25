type SimplePageSectionProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export default function SimplePageSection({
  title,
  description,
  eyebrow = "SECTION",
}: SimplePageSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="text-xs font-medium tracking-[0.2em] text-teal-600 dark:text-teal-400">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </section>
  );
}
