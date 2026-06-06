import { getSlide } from "@/data/slides"
import { SlideScene } from "./SlideScene"

export function Slide50Closing() {
  return <SlideScene slide={getSlide(50)} />
}
