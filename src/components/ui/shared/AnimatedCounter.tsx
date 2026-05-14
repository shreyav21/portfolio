// src/components/shared/AnimatedCounter.tsx
"use client"

import { useEffect, useState } from "react"

type Props = {
  target: number
  suffix?: string
  duration?: number // ms
  trigger: boolean  // starts counting when true
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 1800,
  trigger,
}: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let start = 0
    const increment = target / (duration / 16) // ~60fps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [trigger, target, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}