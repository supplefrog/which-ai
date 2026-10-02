import type { ComponentType } from "react";

type RunModule = { PageOne: ComponentType; PageTwo: ComponentType; PageThree: ComponentType; PageFour: ComponentType; PageFive: ComponentType };

// Each document loads only its candidate, including that candidate's CSS.
export const localRegistry: Record<string, () => Promise<RunModule>> = {
  "local-baseline": () => import("@/variants/local-baseline/gpt-6.1-sol/source/Designs"),
  "local-addy": () => import("@/variants/local-addy/gpt-6.1-sol/source/Designs"),
  "local-anthropic": () => import("@/variants/local-anthropic/gpt-6.1-sol/source/Designs"),
  "local-emil": () => import("@/variants/local-emil/gpt-6.1-sol/source/Designs"),
  "local-taste-gpt": () => import("@/variants/local-taste-gpt/gpt-6.1-sol/source/Designs"),
  "local-hallmark": () => import("@/variants/local-hallmark/gpt-6.1-sol/source/Designs"),
  "local-impeccable": () => import("@/variants/local-impeccable/gpt-6.1-sol/source/Designs"),
  "local-taste-v2": () => import("@/variants/local-taste-v2/gpt-6.1-sol/source/Designs"),
  "local-vercel-review": () => import("@/variants/local-vercel-review/gpt-6.1-sol/source/Designs"),
  "local-personal": () => import("@/variants/local-personal/gpt-6.1-sol/source/Designs"),
  "local-personal-revised": () => import("@/variants/local-personal-revised/gpt-6.1-sol/source/Designs"),
};
