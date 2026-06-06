import type { Variants } from "motion/react"

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
