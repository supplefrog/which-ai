import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

export async function GET() {
  const evidence = path.join(process.cwd(), "src/variants/local-personal-323/gpt-6.1-sol/source/evidence");
  const [skill, snapshotText] = await Promise.all([
    readFile(path.join(evidence, "skill/SKILL.md"), "utf8"),
    readFile(path.join(evidence, "skill-snapshot.json"), "utf8"),
  ]);
  const snapshot = JSON.parse(snapshotText) as {
    version: string; installedBundleSha256: string; mainSha256: string; capturedAt: string;
  };
  return new Response(
    `Frozen installed skill v${snapshot.version}\nInstalled bundle SHA-256: ${snapshot.installedBundleSha256}\nMain file SHA-256: ${snapshot.mainSha256}\nCaptured: ${snapshot.capturedAt}\nFresh five-design trial: three fresh GPT-6.1 Sol/medium builders, with concept coordination and subsequent review/repairs disclosed in generation-notes.md. Not an equal-budget one-pass benchmark.\n\n${skill}`,
    { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } },
  );
}
