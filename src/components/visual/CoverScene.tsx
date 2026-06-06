import { CheckCircle2, FileText, LineChart, Scale, WalletCards } from "lucide-react"
import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"

interface CoverSceneProps {
  totalSlides: number
  totalMinutes: number
  teamCount: number
}

const systemCards = [
  {
    label: "PLAN",
    title: "Ý tưởng",
    detail: "khóa giả thuyết",
    Icon: FileText,
  },
  {
    label: "LEGAL",
    title: "Pháp lý",
    detail: "chạy hợp lệ",
    Icon: Scale,
  },
  {
    label: "OPERATE",
    title: "Vận hành",
    detail: "lặp lại được",
    Icon: CheckCircle2,
  },
  {
    label: "CASH",
    title: "Dòng tiền",
    detail: "biết còn bao lâu",
    Icon: WalletCards,
  },
  {
    label: "KPI",
    title: "Đo lường",
    detail: "ra quyết định",
    Icon: LineChart,
  },
]

export function CoverScene({ totalSlides, totalMinutes, teamCount }: CoverSceneProps) {
  return (
    <motion.div
      variants={stagger}
      className="grid h-full grid-cols-[0.86fr_1.14fr] items-stretch gap-10"
    >
      <motion.aside
        variants={fadeUp}
        className="flex min-h-0 flex-col justify-between border-l-4 border-[var(--deck-primary)] pl-8"
      >
        <div className="space-y-5">
          <div className="w-fit border border-[var(--deck-border)] bg-[var(--deck-surface)] px-4 py-2 text-[17px] font-bold uppercase tracking-[0.12em] text-[var(--deck-secondary)]">
            Do nhóm 3 thực hiện
          </div>
          <div className="space-y-4 text-[24px] leading-[1.45] text-[var(--deck-muted)]">
            <p>
              <strong className="text-[var(--deck-text)]">Giảng viên:</strong> Đỗ Đình Thanh
            </p>
            <p>
              <strong className="text-[var(--deck-text)]">Môn học:</strong> Khởi nghiệp
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { value: totalSlides, label: "slide" },
            { value: totalMinutes, label: "phút" },
            { value: teamCount, label: "thành viên" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="border border-[var(--deck-border)] bg-[var(--deck-surface)] p-3"
            >
              <div className="text-[30px] font-black leading-none text-[var(--deck-primary)]">
                {metric.value}
              </div>
              <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--deck-muted)]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </motion.aside>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden border border-[var(--deck-border)] bg-[var(--deck-surface)] p-6 shadow-[var(--deck-shadow)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,231,235,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.55)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-[17px] font-bold uppercase tracking-[0.14em] text-[var(--deck-secondary)]">
                Implementation system
              </p>
              <h2 className="mt-3 max-w-[640px] text-[36px] leading-[1.08]">
                Plan → Legal → Operate → Cash → KPI
              </h2>
            </div>
            <div className="grid h-20 w-20 place-items-center border-2 border-[var(--deck-primary)] text-[38px] font-black text-[var(--deck-primary)]">
              06
            </div>
          </div>

          <div className="relative mt-6 grid grid-cols-5 gap-3">
            <div className="absolute left-[9%] right-[9%] top-[42px] h-px bg-[var(--deck-border)]" />
            {systemCards.map(({ label, title, detail, Icon }, index) => (
              <motion.article
                key={label}
                variants={fadeUp}
                className="relative min-h-[142px] border border-[var(--deck-border)] bg-[rgba(255,255,255,0.92)] p-4 shadow-[var(--deck-shadow)]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[15px] font-black text-[var(--deck-secondary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={22} strokeWidth={1.9} className="text-[var(--deck-primary)]" />
                </div>
                <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--deck-muted)]">
                  {label}
                </div>
                <strong className="mt-2 block text-[24px] leading-[1.08]">{title}</strong>
                <p className="mt-2 text-[16px] leading-[1.3] text-[var(--deck-muted)]">{detail}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-[1fr_250px] gap-4">
            <div className="border border-[var(--deck-border)] bg-[rgba(255,255,255,0.92)] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[16px] font-bold uppercase tracking-[0.1em] text-[var(--deck-muted)]">
                  90 ngày đầu
                </span>
                <span className="text-[16px] font-bold text-[var(--deck-secondary)]">
                  setup - validate - stabilize
                </span>
              </div>
              <svg viewBox="0 0 700 120" className="h-[92px] w-full" role="img">
                <path
                  d="M28 92 C120 86 144 36 230 42 S350 104 440 58 560 22 672 28"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M28 96 H672"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {[28, 230, 440, 672].map((x) => (
                  <circle key={x} cx={x} cy={x === 28 ? 92 : x === 230 ? 42 : x === 440 ? 58 : 28} r="8" fill="#0F766E" />
                ))}
              </svg>
            </div>
            <div className="flex flex-col justify-between border border-[var(--deck-border)] bg-[rgba(255,255,255,0.92)] p-4">
              <span className="text-[16px] font-bold uppercase tracking-[0.1em] text-[var(--deck-muted)]">
                Mục tiêu
              </span>
              <strong className="text-[28px] leading-[1.1]">từ kế hoạch sang hệ thống chạy được</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
