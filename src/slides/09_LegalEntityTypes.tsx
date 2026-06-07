import { getSlide, slides } from "@/data/slides"
import { SlideShell } from "@/components/layout/SlideShell"
import { fadeUp, stagger } from "@/lib/motion"
import { motion } from "motion/react"

const legalEntities = [
  {
    index: "01",
    name: "Kinh doanh theo Nghị định 66/1992/HĐBT",
    detail: "Hình thức kinh doanh theo Nghị định 66/1992/HĐBT ngày 02/03/1992.",
    tag: "NĐ 66/1992",
  },
  {
    index: "02",
    name: "Doanh nghiệp tư nhân",
    detail: "Loại hình do một cá nhân làm chủ và tự chịu trách nhiệm.",
    tag: "DNTN",
  },
  {
    index: "03",
    name: "Công ty TNHH có trên một thành viên",
    detail: "Phù hợp khi có nhiều thành viên góp vốn cùng tham gia.",
    tag: "TNHH 2+",
  },
  {
    index: "04",
    name: "Công ty TNHH một thành viên",
    detail: "Phù hợp khi một cá nhân hoặc tổ chức làm chủ sở hữu.",
    tag: "TNHH 1TV",
  },
  {
    index: "05",
    name: "Công ty cổ phần",
    detail: "Phù hợp với nhu cầu huy động vốn và mở rộng sở hữu.",
    tag: "CP",
  },
  {
    index: "06",
    name: "Công ty hợp danh",
    detail: "Dựa nhiều vào uy tín và trách nhiệm của các thành viên hợp danh.",
    tag: "Hợp danh",
  },
  {
    index: "07",
    name: "Doanh nghiệp nhà nước",
    detail: "Một hình thức doanh nghiệp được tài liệu đưa vào danh mục.",
    tag: "DNNN",
  },
  {
    index: "08",
    name: "Hợp tác xã",
    detail: "Tổ chức kinh tế tập thể, phù hợp mục tiêu hợp tác giữa các thành viên.",
    tag: "HTX",
  },
  {
    index: "09",
    name: "Doanh nghiệp có vốn nước ngoài",
    detail: "Gắn với yếu tố vốn đầu tư từ nước ngoài.",
    tag: "FDI",
  },
]

export function Slide09LegalEntityTypes() {
  const slide = getSlide(9)

  return (
    <SlideShell slide={slide} total={slides.length}>
      <motion.div variants={stagger} className="flex h-full flex-col gap-5">
        <motion.div variants={stagger} className="grid flex-1 grid-cols-3 gap-5">
          {legalEntities.map((entity) => (
            <motion.article
              key={entity.index}
              variants={fadeUp}
              className="flex min-h-0 flex-col justify-between border border-(--deck-border) bg-(--deck-surface) p-6 shadow-(--deck-shadow)"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[38px] font-black leading-none text-(--deck-primary)">
                    {entity.index}
                  </span>
                  <span className="border border-(--deck-border) px-3 py-1 text-[13px] font-black uppercase text-(--deck-secondary)">
                    {entity.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-[28px] leading-[1.08] text-(--deck-text)">
                  {entity.name}
                </h3>
              </div>
              <p className="mt-5 text-[19px] leading-[1.35] text-(--deck-muted)">
                {entity.detail}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </SlideShell>
  )
}
