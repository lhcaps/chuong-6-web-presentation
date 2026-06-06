import type { VisualType } from "@/data/types"
import type { Variants } from "motion/react"
import {
  fadeUp,
  slideRight,
  slideLeft,
  zoomIn,
  flipX,
  explode,
  wave,
  stagger,
  chartEnter,
} from "./transitions"

export type RevealTransition =
  | "fade"
  | "slide"
  | "convex"
  | "concave"
  | "zoom"
  | "none"

export interface TransitionPreset {
  reveal: RevealTransition
  revealSpeed: "fast" | "slow" | "default"
  header: Variants
  content: Variants
  bullet: Variants
  footer: Variants
  extra: Variants
}

const DEFAULT: TransitionPreset = {
  reveal: "fade",
  revealSpeed: "default",
  header: fadeUp,
  content: fadeUp,
  bullet: fadeUp,
  footer: fadeUp,
  extra: fadeUp,
}

export const TRANSITION_MAP: Record<VisualType, TransitionPreset> = {
  cover: {
    reveal: "zoom",
    revealSpeed: "slow",
    header: zoomIn,
    content: fadeUp,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  members: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  roadmap: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  process: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  checklist: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  comparison: {
    reveal: "convex",
    revealSpeed: "default",
    header: slideLeft,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  decision: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: flipX,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  document: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  case: {
    reveal: "convex",
    revealSpeed: "default",
    header: slideRight,
    content: flipX,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  org: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  sop: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  loop: {
    reveal: "convex",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  validation: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  funnel: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  chart: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: chartEnter,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  resource: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  riskMatrix: {
    reveal: "convex",
    revealSpeed: "default",
    header: slideRight,
    content: explode,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  dashboard: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  timeline: {
    reveal: "slide",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  milestone: {
    reveal: "convex",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  mistakes: {
    reveal: "fade",
    revealSpeed: "default",
    header: slideRight,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  interaction: {
    reveal: "zoom",
    revealSpeed: "default",
    header: zoomIn,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  qa: {
    reveal: "zoom",
    revealSpeed: "default",
    header: zoomIn,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },

  recap: {
    reveal: "slide",
    revealSpeed: "slow",
    header: slideRight,
    content: stagger,
    bullet: wave,
    footer: fadeUp,
    extra: stagger,
  },

  closing: {
    reveal: "zoom",
    revealSpeed: "slow",
    header: zoomIn,
    content: stagger,
    bullet: stagger,
    footer: fadeUp,
    extra: stagger,
  },
}

export function getPreset(slideType: VisualType): TransitionPreset {
  return TRANSITION_MAP[slideType] ?? DEFAULT
}

export function getRevealTransition(slideType: VisualType): {
  transition: RevealTransition
  transitionSpeed: "fast" | "slow" | "default"
} {
  const preset = getPreset(slideType)
  return {
    transition: preset.reveal,
    transitionSpeed: preset.revealSpeed,
  }
}
