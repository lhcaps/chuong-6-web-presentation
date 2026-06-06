import { getSlide } from "@/data/slides"
import { SlideScene } from "./SlideScene"

export function Slide32ResourceAllocation() {
  return <SlideScene slide={getSlide(32)} />
}
