import { useEffect, useRef } from "react"
import Reveal from "reveal.js"
import type { RevealApi } from "reveal.js"
import Highlight from "reveal.js/plugin/highlight"
import Notes from "reveal.js/plugin/notes"
import Search from "reveal.js/plugin/search"

import { slideComponents } from "@/slides"
import { deckConfig } from "./deckConfig"
import { TransitionProvider, getRevealTransition } from "@/lib/transitionContext"
import { slides } from "@/data/slides"
import type { VisualType } from "@/data/types"

function getSectionClass(slideType: VisualType): string {
  return `slide-${slideType}`
}

// Cast RevealApi to allow custom events
type RevealWithCustomEvents = RevealApi & {
  on(event: "slidechanged", listener: (event: { indexh: number }) => void): void
  on(event: "fragmentshown", listener: () => void): void
  on(event: "fragmenthidden", listener: () => void): void
}

function RevealDeckInner() {
  const revealRef = useRef<HTMLDivElement | null>(null)
  const deckRef = useRef<RevealApi | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!revealRef.current || initializedRef.current) return
    initializedRef.current = true

    const deck = new Reveal(revealRef.current, {
      ...deckConfig,
      plugins: [Notes, Search, Highlight],
    })

    deck.initialize().then(() => {
      deckRef.current = deck
      const revealEl = deck.getRevealElement()
      if (!revealEl) return

      const deckWithEvents = deck as RevealWithCustomEvents

      deckWithEvents.on("slidechanged", ({ indexh }) => {
        const slideData = slides[indexh]
        if (!slideData) return

        const slideType = slideData.visualType
        const { transition, transitionSpeed } = getRevealTransition(slideType)

        deck.configure({ transition, transitionSpeed })

        const allSections = revealEl.querySelectorAll("section")
        const currentSection = allSections[indexh] as HTMLElement | null

        if (currentSection) {
          currentSection.dataset.transition = transition
        }

        window.dispatchEvent(
          new CustomEvent("deck-slide-changed", {
            detail: { index: indexh, transition, transitionSpeed, slideType },
          })
        )
      })

      deckWithEvents.on("slidechanged", ({ indexh }) => {
        const allSections = revealEl.querySelectorAll("section")
        allSections.forEach((section, i) => {
          const el = section as HTMLElement
          if (i === indexh) {
            el.classList.add("present")
          } else {
            el.classList.remove("present")
          }
        })
      })

      deckWithEvents.on("fragmentshown", () => {
        window.dispatchEvent(new CustomEvent("deck-fragment-shown"))
      })

      deckWithEvents.on("fragmenthidden", () => {
        window.dispatchEvent(new CustomEvent("deck-fragment-hidden"))
      })

      const allSections = revealEl.querySelectorAll("section")
      allSections.forEach((section, i) => {
        const slideType = slides[i]?.visualType ?? "process"
        const el = section as HTMLElement
        el.dataset.slideType = slideType
        el.classList.add(getSectionClass(slideType))
      })

      const firstSection = allSections[0]
      if (firstSection) {
        const slideType = slides[0]?.visualType ?? "cover"
        const { transition } = getRevealTransition(slideType)
        ;(firstSection as HTMLElement).dataset.transition = transition
        firstSection.classList.add("present")
      }
    })

    return () => {
      deck.destroy()
      deckRef.current = null
      initializedRef.current = false
    }
  }, [])

  return (
    <div className="reveal" ref={revealRef}>
      <div className="slides">
        {slideComponents.map((Slide, index) => (
          <Slide key={index} />
        ))}
      </div>
    </div>
  )
}

export function RevealDeck() {
  return (
    <TransitionProvider>
      <RevealDeckInner />
    </TransitionProvider>
  )
}
