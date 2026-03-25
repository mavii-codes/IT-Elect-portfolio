import Image from "next/image";
import SimplePageSection from "@/components/features/shared/SimplePageSection";

const projects = [
  {
    title: "Profile Page",
    description: "My very first React component and the spark for how I approach UI building today. Experimenting with props/state taught me how thinking in components boosts creativity.",
    repoUrl: "https://github.com/mavii-codes/activity-1-profilepage",
    image: "/project-images/ProfilePage.jpg",
    alt: "Screenshot of profile page project",
  },
  {
    title: "E-Commerce Web App",
    description: "A bookstore SPA that lets users search, browse, and add to cart. Built with React, APIs, and Tailwind to keep navigation buttery smooth.",
    repoUrl: "https://github.com/mavii-codes/midterm-appsdev",
    image: "/project-images/E-commerce.jpg",
    alt: "Screenshot of e-commerce web app",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <SimplePageSection
        title="Projects"
        description="A curated collection of frontend work, from personal portfolio sections to complete responsive interfaces."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            {project.image && (
              <div className="relative h-48 w-full transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.alt ?? project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{project.title}</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">{project.description}</p>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-500"
              >
                View Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
