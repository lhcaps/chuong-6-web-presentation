import { useRive } from "@rive-app/react-webgl2"

interface RiveAccentProps {
  src?: string
  stateMachine?: string
  label: string
}

function RivePlayer({ src, stateMachine }: Required<Pick<RiveAccentProps, "src">> & Pick<RiveAccentProps, "stateMachine">) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
    autoplay: true,
  })

  return <RiveComponent />
}

export function RiveAccent({ src, stateMachine, label }: RiveAccentProps) {
  if (src) {
    return (
      <div className="h-24 w-24 overflow-hidden rounded-lg border border-[var(--deck-border)]">
        <RivePlayer src={src} stateMachine={stateMachine} />
      </div>
    )
  }

  return (
    <div className="grid h-24 w-24 place-items-center rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)]">
      <span className="text-[18px] font-bold text-[var(--deck-primary)]">{label}</span>
    </div>
  )
}
