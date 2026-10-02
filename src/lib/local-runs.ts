import data from "./local-runs.json";

export interface LocalRun {
  condition: string;
  label: string;
  model: string;
  reasoning: string;
  source: string | null;
  revision: string | null;
  iterations: number[];
}

export const localRuns = data as LocalRun[];
export const localPrompt = "I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.";
