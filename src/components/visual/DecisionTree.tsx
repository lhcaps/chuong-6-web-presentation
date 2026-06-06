import { Background, Controls, ReactFlow, type Edge, type Node } from "@xyflow/react"

interface DecisionTreeProps {
  items: string[]
}

export function DecisionTree({ items }: DecisionTreeProps) {
  const nodes: Node[] = [
    {
      id: "root",
      position: { x: 380, y: 20 },
      data: { label: items[0] ?? "Câu hỏi chính" },
      type: "default",
    },
    {
      id: "left",
      position: { x: 90, y: 180 },
      data: { label: items[1] ?? "Nhánh 1" },
      type: "default",
    },
    {
      id: "right",
      position: { x: 650, y: 180 },
      data: { label: items[2] ?? "Nhánh 2" },
      type: "default",
    },
    {
      id: "result",
      position: { x: 380, y: 350 },
      data: { label: items[3] ?? "Kết luận" },
      type: "output",
    },
  ]

  const edges: Edge[] = [
    { id: "root-left", source: "root", target: "left", animated: true },
    { id: "root-right", source: "root", target: "right", animated: true },
    { id: "left-result", source: "left", target: "result", animated: true },
    { id: "right-result", source: "right", target: "result", animated: true },
  ]

  return (
    <div className="h-[560px] overflow-hidden rounded-lg border border-[var(--deck-border)] bg-[var(--deck-surface)] shadow-[var(--deck-shadow)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        panOnScroll={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#E5E7EB" gap={32} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  )
}
