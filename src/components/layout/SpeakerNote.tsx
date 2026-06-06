interface SpeakerNoteProps {
  children: string
}

export function SpeakerNote({ children }: SpeakerNoteProps) {
  return <aside className="notes">{children}</aside>
}
