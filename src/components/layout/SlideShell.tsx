import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { motion } from "motion/react"

import { sourceLabels } from "@/data/sources"
import type { DeckSlide } from "@/data/types"
import { SpeakerNote } from "./SpeakerNote"
import { SlideTitle } from "./SlideTitle"

interface SlideShellProps {
  slide: DeckSlide
  total: number
  children: ReactNode
  hero?: boolean
}

export function SlideShell({ slide, total, children, hero = false }: SlideShellProps) {
  const progress = `${(slide.id / total) * 100}%`
  const labels = sourceLabels(slide.sourceIds)
  const sectionRef = useRef<HTMLElement>(null)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleSlideChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number; slideType: string }>
      if (customEvent.detail.index === slide.id - 1) {
        setKey((k) => k + 1)
      }
    }

    window.addEventListener("deck-slide-changed", handleSlideChange)
    return () => window.removeEventListener("deck-slide-changed", handleSlideChange)
  }, [slide.id])

  return (
    <section ref={sectionRef}>
      <div className="deck-slide" key={key}>
        <div className="deck-watermark">{String(slide.id).padStart(2, "0")}</div>
        <div className={`deck-inner${hero ? " deck-inner--hero" : ""}`}>
          {hero ? (
            <motion.header
              data-animate="header"
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8, delay: 0.05 }}
              className="cover-title-header grid grid-cols-[1fr_260px] items-start gap-8"
            >
              <div className="flex flex-col gap-7">
                <div className="deck-kicker">Khởi nghiệp / Nhóm 3</div>
                <h1>{slide.title}</h1>
                <p className="max-w-[900px] text-[28px] leading-[1.5] text-[var(--deck-muted)]">
                  {slide.message}
                </p>
              </div>
              <div className="cover-chapter-mark" aria-hidden="true">
                <span>06</span>
                <small>Chapter</small>
              </div>
            </motion.header>
          ) : (
            <SlideTitle slide={slide} />
          )}

          <motion.div
            data-animate="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.8, delay: 0.12 }}
            className="h-full min-h-0"
          >
            {children}
          </motion.div>

          <motion.footer
            data-animate="footer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 130, damping: 24, mass: 0.7, delay: 0.2 }}
            className="flex items-center justify-between border-t border-(--deck-border) pt-4"
          >
            <span className="text-[16px] font-medium text-[var(--deck-muted)]">
              {labels[0] ?? "Chương 6"}
            </span>
            <span className="text-[16px] text-[var(--deck-muted)]">
              {slide.durationSec}s
            </span>
          </motion.footer>
        </div>
        <div className="deck-progress" style={{ "--deck-progress": progress } as CSSProperties}>
          <span />
        </div>
      </div>
      <SpeakerNote>{slide.note}</SpeakerNote>
    </section>
  )
}
