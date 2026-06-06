export type VisualType =
  | "cover"
  | "members"
  | "roadmap"
  | "process"
  | "checklist"
  | "comparison"
  | "decision"
  | "document"
  | "case"
  | "org"
  | "sop"
  | "loop"
  | "validation"
  | "funnel"
  | "chart"
  | "resource"
  | "riskMatrix"
  | "dashboard"
  | "timeline"
  | "milestone"
  | "mistakes"
  | "interaction"
  | "qa"
  | "recap"
  | "closing"

export type ChartKind = "bar" | "line" | "area" | "pie" | "radar"

export interface DeckSlide {
  id: number
  slug: string
  section: string
  title: string
  message: string
  bullets: string[]
  note: string
  durationSec: number
  visualType: VisualType
  visualTitle?: string
  visualItems?: string[]
  chartKey?: string
  chartKind?: ChartKind
  tableKey?: string
  sourceIds: string[]
}

export interface TeamMember {
  name: string
  id: string
  role: string
  focus: string
  lead?: boolean
}
