import { LocalCompare } from "@/components/local/local-compare";
import { localRuns } from "@/lib/local-runs";

export default async function LocalComparePage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const selection = (side: string, fallback: string) => {
    const condition = query[`${side}Condition`];
    const rawIteration = query[`${side}Iteration`];
    const iteration = typeof rawIteration === "string" && /^[1-5]$/.test(rawIteration) ? Number(rawIteration) : 1;
    return { condition: typeof condition === "string" && localRuns.some((run) => run.condition === condition) ? condition : fallback, iteration };
  };
  return <LocalCompare runs={localRuns}
    initialLeft={selection("left", "local-personal-431")}
    initialRight={selection("right", "local-personal")} />;
}
