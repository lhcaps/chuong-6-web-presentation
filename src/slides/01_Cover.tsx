import { getSlide } from "@/data/slides"
import { SlideScene } from "./SlideScene"

export function Slide01Cover() {
  return <SlideScene slide={getSlide(1)} />
}
