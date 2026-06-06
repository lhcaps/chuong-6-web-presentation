import { useEffect, useState } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { slides } from "@/data/slides"

const backupSlides = slides.filter((slide) => slide.visualType === "qa" || slide.visualType === "interaction")

export function PresenterHelper() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "q") {
        setOpen((value) => !value)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  if (!open) {
    return null
  }

  return (
    <aside className="presenter-panel">
      <div className="flex items-center justify-between border-b border-[var(--deck-border)] p-5">
        <div>
          <h2>Q&A dự phòng</h2>
          <p>Luận điểm ngắn để trả lời nhanh khi bị hỏi xoáy.</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          aria-label="Đóng Q&A dự phòng"
          onClick={() => setOpen(false)}
        >
          <X data-icon="inline-start" />
        </Button>
      </div>
      <ScrollArea className="h-[430px]">
        <div className="flex flex-col gap-5 p-5">
          {backupSlides.map((slide) => (
            <article key={slide.id} className="border-b border-[var(--deck-border)] pb-4 last:border-b-0">
              <h3 className="mb-2 text-[18px]">{slide.title}</h3>
              <p className="mb-3">{slide.message}</p>
              <ul className="flex flex-col gap-1">
                {slide.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
