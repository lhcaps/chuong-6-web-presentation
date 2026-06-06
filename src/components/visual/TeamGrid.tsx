import { motion } from "motion/react"

import { members } from "@/data/members"
import { fadeUp, stagger } from "@/lib/motion"

export function TeamGrid() {
  return (
    <motion.div variants={stagger} className="grid h-full grid-cols-4 grid-rows-2 gap-5">
      {members.map((member) => (
        <motion.article
          key={member.id}
          variants={fadeUp}
          className={`flex min-h-0 flex-col justify-between rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] p-5 ${
            member.lead ? "row-span-2 shadow-[var(--deck-shadow)]" : ""
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[17px] font-semibold text-[var(--deck-secondary)]">
              {member.role}
            </span>
            <h3 className={member.lead ? "text-[34px]" : "text-[23px]"}>{member.name}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[20px] font-semibold text-[var(--deck-text)]">{member.id}</span>
            <p className={member.lead ? "text-[17px]" : "text-[15px]"}>{member.focus}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
