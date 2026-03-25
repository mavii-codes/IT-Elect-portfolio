export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-minimal-portfolio",
    title: "Building a Minimal Portfolio",
    excerpt: "How I design clean layouts that stay focused on results.",
    category: "design",
    date: "2026-02-10",
  },
  {
    slug: "nextjs-component-architecture",
    title: "Next.js Component Architecture",
    excerpt: "A practical way to split common, feature, and provider components.",
    category: "development",
    date: "2026-02-24",
  },
  {
    slug: "dark-mode-accessibility-checklist",
    title: "Dark Mode Accessibility Checklist",
    excerpt: "Simple contrast and spacing checks before shipping.",
    category: "ui-ux",
    date: "2026-03-05",
  },
  {
    slug: "tailwind-gradients-that-stay-subtle",
    title: "Tailwind Gradients That Stay Subtle",
    excerpt: "Layering radial and linear backgrounds without visual noise.",
    category: "design",
    date: "2026-03-12",
  },
  {
    slug: "portfolio-navigation-patterns",
    title: "Portfolio Navigation Patterns",
    excerpt: "Keeping primary routes clear while adding blog and archive links.",
    category: "development",
    date: "2026-03-18",
  },
];
