import { getSlide } from "@/data/slides"
import { SlideScene } from "./SlideScene"

export function Slide42First60Days() {
  return <SlideScene slide={getSlide(42)} />
}
