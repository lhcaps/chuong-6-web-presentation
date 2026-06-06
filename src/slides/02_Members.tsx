import { getSlide } from "@/data/slides"
import { SlideScene } from "./SlideScene"

export function Slide02Members() {
  return <SlideScene slide={getSlide(2)} />
}
