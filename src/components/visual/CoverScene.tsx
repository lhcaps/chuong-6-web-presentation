import {
  Building2,
  ClipboardCheck,
  FileText,
  Landmark,
  MapPinned,
  Route,
  Scale,
  Target,
  UsersRound,
} from "lucide-react"
import { motion } from "motion/react"

import { fadeUp, stagger } from "@/lib/motion"

interface CoverSceneProps {
  totalSlides: number
  teamCount: number
}

const implementationSteps = [
  {
    label: "01",
    name: "Kế hoạch",
    caption: "khái niệm, căn cứ, phương pháp",
    Icon: ClipboardCheck,
  },
  {
    label: "02",
    name: "Pháp lý",
    caption: "hình thức và nhân tố lựa chọn",
    Icon: Scale,
  },
  {
    label: "03",
    name: "Triết lý",
    caption: "sứ mệnh, mục tiêu, giá trị",
    Icon: Target,
  },
  {
    label: "04",
    name: "Thủ tục",
    caption: "đăng ký và thủ tục khác",
    Icon: FileText,
  },
  {
    label: "05",
    name: "Cơ sở VC",
    caption: "quy mô, địa điểm, phương pháp",
    Icon: MapPinned,
  },
]

const textbookFlow = [
  { label: "Phần 1", detail: "lập kế hoạch tạo lập doanh nghiệp" },
  { label: "Phần 2-4", detail: "pháp lý, triết lý và thủ tục" },
  { label: "Phần 5", detail: "các lựa chọn tạo cơ sở vật chất" },
]

export function CoverScene({ totalSlides, teamCount }: CoverSceneProps) {
  const metrics = [
    { value: totalSlides, label: "slide" },
    { value: teamCount, label: "thành viên" },
  ]

  return (
    <motion.div
      variants={stagger}
      className="cover-stage grid h-full grid-cols-[0.76fr_1.24fr] items-stretch gap-8"
    >
      <motion.aside
        variants={fadeUp}
        className="cover-meta-panel flex min-h-0 flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-7 shadow-(--deck-shadow)"
      >
        <div className="space-y-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[16px] font-black uppercase text-(--deck-secondary)">
                Do nhóm 3 thực hiện
              </p>
              <h2 className="mt-3 text-[34px] leading-[1.08]">Bản đồ giáo trình</h2>
            </div>
            <div className="grid h-14 w-14 place-items-center border border-(--deck-primary) text-(--deck-primary)">
              <Route size={28} strokeWidth={1.8} />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="cover-info-row">
              <Landmark size={24} strokeWidth={1.8} />
              <div>
                <span>Giảng viên</span>
                <strong>Đỗ Đình Thanh</strong>
              </div>
            </div>
            <div className="cover-info-row">
              <Building2 size={24} strokeWidth={1.8} />
              <div>
                <span>Môn học</span>
                <strong>Khởi nghiệp</strong>
              </div>
            </div>
            <div className="cover-info-row">
              <UsersRound size={24} strokeWidth={1.8} />
              <div>
                <span>Nhóm trình bày</span>
                <strong>Nhóm 3</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="cover-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </motion.aside>

      <motion.div
        variants={fadeUp}
        className="cover-system-panel relative min-h-0 overflow-hidden border border-(--deck-border) bg-(--deck-surface) p-8 shadow-(--deck-shadow)"
      >
        <div className="cover-blueprint-grid" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-8">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-[16px] font-black uppercase text-(--deck-secondary)">
                Chapter outline
              </p>
              <h2 className="mt-3 max-w-[780px] text-[46px] leading-[1.06]">
                Bám sát 5 nội dung triển khai tạo lập doanh nghiệp
              </h2>
            </div>
            <div className="cover-system-number">
              <span>05</span>
              <small>nội dung</small>
            </div>
          </div>

          <div className="relative grid grid-cols-5 gap-3">
            <div className="absolute left-[8%] right-[8%] top-[44px] h-px bg-(--deck-border)" />
            {implementationSteps.map(({ label, name, caption, Icon }) => (
              <motion.article key={label} variants={fadeUp} className="cover-step">
                <div className="flex items-center justify-between gap-3">
                  <span>{label}</span>
                  <Icon size={25} strokeWidth={1.8} />
                </div>
                <strong>{name}</strong>
                <p>{caption}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-[1fr_270px] gap-4">
            <div className="cover-timeline">
              <div className="flex items-center justify-between">
                <span>Mạch tài liệu</span>
                <strong>kế hoạch - pháp lý - cơ sở vật chất</strong>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {textbookFlow.map((item) => (
                  <div key={item.label}>
                    <b>{item.label}</b>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="cover-outcome">
              <span>Mục tiêu</span>
              <strong>nắm đúng việc cần làm khi tạo lập doanh nghiệp</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
