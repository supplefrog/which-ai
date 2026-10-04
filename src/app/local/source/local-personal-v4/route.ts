import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const evidence = path.join(process.cwd(), 'src/variants/local-personal-v4/gpt-6.1-sol/source/evidence');
  const [skill, metadata] = await Promise.all([
    readFile(path.join(evidence, 'skill/SKILL.md'), 'utf8'),
    readFile(path.join(evidence, 'skill-snapshot.json'), 'utf8'),
  ]);
  const snapshot = JSON.parse(metadata) as { version: string; bundleSha256: string; mainSha256: string; capturedAt: string };
  return new Response(`Frozen frontend skill v${snapshot.version}\nBundle SHA-256: ${snapshot.bundleSha256}\nMain SHA-256: ${snapshot.mainSha256}\nCaptured: ${snapshot.capturedAt}\nThree fresh GPT-6.1 Sol/medium builders; coordination/review/repairs disclosed in generation-notes.md. Not an equal-budget one-pass benchmark.\n\n${skill}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
