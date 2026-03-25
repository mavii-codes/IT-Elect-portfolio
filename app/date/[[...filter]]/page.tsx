import DateFilterSection from "@/components/features/date/DateFilterSection";

export default async function DatePage({
  params,
}: {
  params: Promise<{ filter?: string[] }>;
}) {
  const { filter } = await params;

  return <DateFilterSection filter={filter} />;
}
