import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

export async function GET() {
  const evidence = path.join(process.cwd(), "src/variants/local-personal-revised/gpt-6.1-sol/source/evidence");
  const [skill, snapshotText] = await Promise.all([
    readFile(path.join(evidence, "revision-skill/SKILL.md"), "utf8"),
    readFile(path.join(evidence, "revision-snapshot.json"), "utf8"),
  ]);
  const snapshot = JSON.parse(snapshotText) as { version: string; bundleSha256: string; capturedAt: string };
  return new Response(`Frozen trial skill v${snapshot.version}\nBundle SHA-256: ${snapshot.bundleSha256}\nCaptured: ${snapshot.capturedAt}\nReviewed iteration: fresh v3.2.0 draft, then v3.2.1 guidance and concrete review repairs in the same worker context. Extra effort; not a matched one-pass comparison. The user approved this rendered trial and publication on 2 October 2026. Shared-skill promotion remains separate.\n\n${skill}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
