import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const dynamic = 'force-dynamic';
export async function GET() {
  const source = path.join(process.cwd(), 'src/variants/local-personal-431/gpt-6.1-sol/source');
  const notes = await readFile(path.join(source, 'generation-notes.md'), 'utf8');
  const skill = await readFile(path.join(source, 'evidence/SKILL.md'), 'utf8');
  return new Response(notes + '\n\n' + skill, {headers: {'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store'}});
}
