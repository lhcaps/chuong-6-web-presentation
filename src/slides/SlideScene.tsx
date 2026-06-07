import { charts, tables, timelineMilestones } from "@/data/charts"
import { members } from "@/data/members"
import { slides } from "@/data/slides"
import type { DeckSlide } from "@/data/types"
import { SlideShell } from "@/components/layout/SlideShell"
import { ChartCard } from "@/components/visual/ChartCard"
import { ClassQuestion } from "@/components/visual/ClassQuestion"
import { ClosingScene } from "@/components/visual/ClosingScene"
import { ComparisonMatrix } from "@/components/visual/ComparisonMatrix"
import { CoverScene } from "@/components/visual/CoverScene"
import { DashboardKpi } from "@/components/visual/DashboardKpi"
import { DecisionMap } from "@/components/visual/DecisionMap"
import { OrgBlueprint } from "@/components/visual/OrgBlueprint"
import { ProcessFlow } from "@/components/visual/ProcessFlow"
import { RiskMatrix } from "@/components/visual/RiskMatrix"
import { Roadmap } from "@/components/visual/Roadmap"
import { TeamGrid } from "@/components/visual/TeamGrid"
import { fadeUp, stagger } from "@/lib/motion"
import { motion } from "motion/react"

interface SlideSceneProps {
  slide: DeckSlide
}

function chartData(key?: string) {
  if (!key) {
    return []
  }

  return (charts[key as keyof typeof charts] ?? []) as Record<string, string | number>[]
}

function tableKey(key?: string) {
  return key as keyof typeof tables | undefined
}

function BulletStack({ slide }: SlideSceneProps) {
  return (
    <div className="flex flex-col gap-5">
      {slide.bullets.map((bullet) => (
        <div
          key={bullet}
          className="flex items-start gap-4 border-b border-(--deck-border) pb-4 last:border-b-0"
        >
          <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-(--deck-primary)" />
          <p className="text-[26px] text-(--deck-text)">{bullet}</p>
        </div>
      ))}
    </div>
  )
}

function ChecklistBoard({ slide }: SlideSceneProps) {
  const items = slide.visualItems?.length ? slide.visualItems : slide.bullets

  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-[0.78fr_1.22fr] gap-6">
      <motion.article
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border-l-4 border-(--deck-primary) bg-(--deck-surface) p-8 shadow-(--deck-shadow)"
      >
        <div>
          <p className="text-[18px] font-black uppercase text-(--deck-secondary)">Bộ lọc trước khi vận hành</p>
          <h3 className="mt-5 max-w-[520px] text-[46px] leading-[1.08]">7 câu hỏi sống còn</h3>
          <p className="mt-6 max-w-[560px] text-[25px] leading-[1.42] text-(--deck-muted)">
            {slide.message}
          </p>
        </div>
        <div className="border-t border-(--deck-border) pt-5 text-[21px] font-semibold text-(--deck-muted)">
          Chụp lại slide này để rà soát trước ngày đưa doanh nghiệp vào hoạt động.
        </div>
      </motion.article>

      <motion.div variants={stagger} className="grid h-full grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.article
            key={item}
            variants={fadeUp}
            className="flex min-h-[118px] items-start gap-4 border border-(--deck-border) bg-(--deck-surface) p-5 shadow-(--deck-shadow)"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center border border-(--deck-primary) text-[17px] font-black text-(--deck-primary)">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-[21px] font-semibold leading-[1.24] text-(--deck-text)">{item}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}

function Stage({ slide }: SlideSceneProps) {
  if (slide.visualType === "members") {
    return <TeamGrid />
  }

  if (slide.visualType === "roadmap") {
    return <Roadmap />
  }

  if (slide.visualType === "checklist") {
    return <ChecklistBoard slide={slide} />
  }

  if (slide.visualType === "comparison") {
    return <ComparisonMatrix items={slide.visualItems} tableKey={tableKey(slide.tableKey)} />
  }

  if (slide.visualType === "decision") {
    return <DecisionMap items={slide.visualItems ?? []} />
  }

  if (slide.visualType === "chart" || slide.visualType === "funnel") {
    return (
      <ChartCard
        title={slide.visualTitle ?? slide.title}
        kind={slide.chartKind ?? "bar"}
        data={chartData(slide.chartKey)}
      />
    )
  }

  if (slide.visualType === "resource") {
    return (
      <div className="grid h-full grid-cols-[0.92fr_1.08fr] gap-6">
        <ChartCard title="Tỷ trọng nguồn lực" kind="pie" data={chartData(slide.chartKey)} />
        <ComparisonMatrix tableKey={tableKey(slide.tableKey)} />
      </div>
    )
  }

  if (slide.visualType === "riskMatrix") {
    return <RiskMatrix />
  }

  if (slide.visualType === "dashboard") {
    return <DashboardKpi />
  }

  if (slide.visualType === "org") {
    return <OrgBlueprint items={slide.visualItems ?? []} />
  }

  if (slide.visualType === "timeline") {
    const count = timelineMilestones.length
    return (
      <div className="grid h-full gap-6" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
        {timelineMilestones.map((item) => (
          <article
            key={item.day}
            className="flex flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-7 shadow-(--deck-shadow)"
          >
            <span className="text-[54px] font-black leading-none text-(--deck-primary)">
              {item.day}
            </span>
            <div>
              <h3>{item.label}</h3>
              <p className="mt-3 text-[20px]">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    )
  }

  if (slide.visualType === "milestone") {
    return <ComparisonMatrix items={slide.visualItems} tableKey={undefined} />
  }

  if (slide.visualType === "interaction" || slide.visualType === "qa") {
    return <ClassQuestion slide={slide} />
  }

  if (slide.visualType === "recap") {
    return <ProcessFlow items={slide.visualItems ?? slide.bullets} />
  }

  if (slide.visualType === "closing") {
    return <ClosingScene slide={slide} />
  }

  return <ProcessFlow items={slide.visualItems ?? slide.bullets} compact={slide.bullets.length > 4} />
}

function HeroStage() {
  const totalSeconds = slides.reduce((sum, item) => sum + item.durationSec, 0)
  const minutes = Math.round(totalSeconds / 60)

  return (
    <CoverScene
      totalSlides={slides.length}
      teamCount={members.length}
    />
  )
}

export function SlideScene({ slide }: SlideSceneProps) {
  const hero = slide.visualType === "cover"
  const fullStage =
    slide.visualType === "interaction" ||
    slide.visualType === "qa" ||
    slide.visualType === "closing" ||
    slide.visualType === "decision" ||
    slide.visualType === "org" ||
    slide.visualType === "checklist" ||
    slide.visualType === "process" ||
    slide.visualType === "sop"

  return (
    <SlideShell slide={slide} total={slides.length} hero={hero}>
      {hero ? (
        <HeroStage />
      ) : slide.visualType === "members" ? (
        <Stage slide={slide} />
      ) : fullStage ? (
        <Stage slide={slide} />
      ) : (
        <div className="grid h-full grid-cols-[0.42fr_0.58fr] gap-8">
          <BulletStack slide={slide} />
          <Stage slide={slide} />
        </div>
      )}
    </SlideShell>
  )
}
