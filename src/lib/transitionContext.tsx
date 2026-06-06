import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from "react"
import type { VisualType } from "@/data/types"
import { getPreset, type TransitionPreset } from "./transitionMap"

interface TransitionContextValue {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  getPresetForType: (type: VisualType) => TransitionPreset
  isTransitioning: boolean
  setIsTransitioning: (val: boolean) => void
}

const TransitionContext = createContext<TransitionContextValue | null>(null)

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSetCurrentIndex = useCallback((index: number) => {
    setIsTransitioning(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 380)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const getPresetForType = useCallback((type: VisualType) => {
    return getPreset(type)
  }, [])

  return (
    <TransitionContext.Provider
      value={{
        currentIndex,
        setCurrentIndex: handleSetCurrentIndex,
        getPresetForType,
        isTransitioning,
        setIsTransitioning,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) {
    throw new Error("useTransition must be used within TransitionProvider")
  }
  return ctx
}

export { getRevealTransition } from "./transitionMap"