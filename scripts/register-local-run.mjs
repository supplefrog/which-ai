import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const [condition, label, source = "", revision = ""] = process.argv.slice(2);
if (!condition || !/^local-[a-z0-9-]+$/.test(condition) || !label) {
  throw new Error("Usage: node scripts/register-local-run.mjs local-condition 'Label' [source-url] [revision]");
}
const root = process.cwd();
await access(path.join(root, "src", "variants", condition, "gpt-6.1-sol", "source", "Designs.tsx"));
await access(path.join(root, "src", "variants", condition, "gpt-6.1-sol", "source", "generation-notes.md"));
const metadataPath = path.join(root, "src/lib/local-runs.json");
const runs = JSON.parse(await readFile(metadataPath, "utf8"));
const run = { condition, label, model: "GPT-6.1 Sol", reasoning: "medium", source: source || null,
  revision: revision || null, iterations: [1, 2, 3, 4, 5] };
const index = runs.findIndex((item) => item.condition === condition);
if (index < 0) runs.push(run); else runs[index] = run;
runs.sort((a, b) => a.condition === "local-baseline" ? -1 : b.condition === "local-baseline" ? 1 : a.label.localeCompare(b.label));
const entries = runs.map((item) => `  ${JSON.stringify(item.condition)}: () => import(${JSON.stringify(`@/variants/${item.condition}/gpt-6.1-sol/source/Designs`)}),`).join("\n");
await writeFile(path.join(root, "src/lib/local-registry.tsx"), `import type { ComponentType } from "react";\n\ntype RunModule = { PageOne: ComponentType; PageTwo: ComponentType; PageThree: ComponentType; PageFour: ComponentType; PageFive: ComponentType };\n\n// Each document loads only its candidate, including that candidate's CSS.\nexport const localRegistry: Record<string, () => Promise<RunModule>> = {\n${entries}\n};\n`);
await writeFile(metadataPath, JSON.stringify(runs, null, 2) + "\n");
console.log(`Registered ${label}: five GPT-6.1 Sol designs`);
