import type { Variants } from "motion/react"

export type TransitionName =
  | "fade-up"
  | "slide-right"
  | "slide-left"
  | "slide-down"
  | "zoom-in"
  | "spin-in"
  | "flip-x"
  | "explode"
  | "conveyor"
  | "wave"
  | "cover-sweep"
  | "converge"
  | "fly-in"

export const deckSpring = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 0.8,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: deckSpring },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
}

export const chartEnter: Variants = {
  hidden: { opacity: 0, scaleY: 0.92 },
  show: {
    opacity: 1,
    scaleY: 1,
    transition: { ...deckSpring, delay: 0.12 },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: deckSpring },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: deckSpring },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -48 },
  show: { opacity: 1, y: 0, transition: deckSpring },
}

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.72 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.6 },
  },
}

export const spinIn: Variants = {
  hidden: { opacity: 0, rotate: -12, scale: 0.88 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { ...deckSpring, rotate: { type: "spring", stiffness: 60, damping: 14 } },
  },
}

export const flipX: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  show: {
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 80, damping: 16, mass: 0.7 },
  },
}

export const flipY: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 80, damping: 16, mass: 0.7 },
  },
}

export const explode: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, mass: 1 },
  },
}

export const conveyor: Variants = {
  hidden: {},
  show: (i: number) => ({
    opacity: [0, 1, 1, 0],
    y: [60, 0, 0, -60],
    transition: {
      duration: 1.2,
      delay: i * 0.08,
      times: [0, 0.15, 0.85, 1],
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const wave: Variants = {
  hidden: {},
  show: (i: number) => ({
    opacity: [0, 0, 1, 1],
    y: [40, 0, 0, -20],
    transition: {
      duration: 1.0,
      delay: i * 0.09,
      times: [0, 0.2, 0.8, 1],
      ease: "easeOut",
    },
  }),
}

export const flyInRight: Variants = {
  hidden: { opacity: 0, x: 120, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ...deckSpring, delay: 0.1 },
  },
}

export const flyInLeft: Variants = {
  hidden: { opacity: 0, x: -120, y: 20 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ...deckSpring, delay: 0.1 },
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 16, mass: 0.5 },
  },
}

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
}

export const scaleX: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { ...deckSpring, delay: 0.05 },
  },
}

export const scaleY: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { ...deckSpring, delay: 0.05 },
  },
}

export const progressBar: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}
