import { TooltipProvider } from "@/components/ui/tooltip"
import { PresenterHelper } from "@/app/PresenterHelper"
import { RevealDeck } from "@/app/RevealDeck"

function App() {
  return (
    <TooltipProvider>
      <RevealDeck />
      <PresenterHelper />
    </TooltipProvider>
  )
}

export default App
