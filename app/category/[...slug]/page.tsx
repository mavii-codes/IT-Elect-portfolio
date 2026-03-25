import CategoryPathSection from "@/components/features/category/CategoryPathSection";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return <CategoryPathSection slug={slug} />;
}
