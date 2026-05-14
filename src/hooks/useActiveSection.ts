// src/hooks/useActiveSection.ts
"use client"

import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        {
          rootMargin: "-40% 0px -55% 0px", // triggers when section is in the middle 5% of viewport
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return active
}