import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

export async function GET() {
  const evidence = path.join(process.cwd(), "src/variants/local-personal/gpt-6.1-sol/source/evidence");
  const [skill, snapshotText] = await Promise.all([
    readFile(path.join(evidence, "skill/SKILL.md"), "utf8"),
    readFile(path.join(evidence, "snapshot.json"), "utf8"),
  ]);
  const snapshot = JSON.parse(snapshotText) as { version: string; bundleSha256: string; capturedAt: string };
  return new Response(`Frozen tested skill v${snapshot.version}\nBundle SHA-256: ${snapshot.bundleSha256}\nCaptured: ${snapshot.capturedAt}\n\n${skill}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
