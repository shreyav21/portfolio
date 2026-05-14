
"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 80)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {/* Mouse SVG */}
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        stroke="hsl(240 5% 55%)"
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="22" height="34" rx="11" />
        <circle
          className="scroll-dot"
          cx="12"
          cy="10"
          r="3"
          fill="hsl(195, 100%, 55%)"
          stroke="none"
        />
      </svg>
      <span
        className="font-mono text-[10px] tracking-widest uppercase text-zinc-600"
      >
        Scroll
      </span>
    </div>
  )
}