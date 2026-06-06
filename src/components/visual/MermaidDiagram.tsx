import { useEffect, useId, useState } from "react"
import mermaid from "mermaid"

interface MermaidDiagramProps {
  chart: string
}

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    background: "#FFFFFF",
    primaryColor: "#EFF6FF",
    primaryTextColor: "#111827",
    primaryBorderColor: "#2563EB",
    lineColor: "#0F766E",
    fontFamily: "Be Vietnam Pro, Segoe UI, sans-serif",
  },
})

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId().replace(/:/g, "")
  const [svg, setSvg] = useState("")

  useEffect(() => {
    let cancelled = false

    mermaid.render(`mermaid-${id}`, chart).then((result) => {
      if (!cancelled) {
        setSvg(result.svg)
      }
    })

    return () => {
      cancelled = true
    }
  }, [chart, id])

  return (
    <div
      className="flex h-full min-h-[480px] items-center justify-center rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
