import { notFound } from "next/navigation";
import { localRegistry } from "@/lib/local-registry";

export default async function LocalPreview({ params }: {
  params: Promise<{ condition: string; iteration: string }>;
}) {
  const { condition, iteration } = await params;
  if (!/^[1-5]$/.test(iteration)) notFound();
  const load = localRegistry[condition];
  if (!load) notFound();
  const runModule = await load();
  const Page = [runModule.PageOne, runModule.PageTwo, runModule.PageThree, runModule.PageFour, runModule.PageFive][Number(iteration) - 1];
  return <Page />;
}
