import { useEffect, useState } from "react"
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react"

interface AnimatedNumberProps {
  value: number
  suffix?: string
}

export function AnimatedNumber({ value, suffix = "" }: AnimatedNumberProps) {
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(reduceMotion ? value : 0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplay)
    const controls = reduceMotion
      ? undefined
      : animate(motionValue, value, { duration: 0.85, ease: "easeOut" })

    if (reduceMotion) {
      motionValue.set(value)
    }

    return () => {
      controls?.stop()
      unsubscribe()
    }
  }, [motionValue, reduceMotion, rounded, value])

  return (
    <motion.span className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  )
}
