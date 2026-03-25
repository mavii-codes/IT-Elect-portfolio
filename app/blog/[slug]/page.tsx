import BlogPostSection from "@/components/features/blog/BlogPostSection";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogPostSection slug={slug} />;
}
