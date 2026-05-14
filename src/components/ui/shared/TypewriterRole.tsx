// src/components/shared/TypewriterRole.tsx

"use client"

import { useEffect, useState } from "react"

type Props = {
  roles: string[]
  typingSpeed?: number   // ms per character when typing
  deletingSpeed?: number // ms per character when deleting
  pauseDuration?: number // ms to pause after fully typed
  startDelay?: number    // ms before the first character appears
}

export function TypewriterRole({
  roles,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200,
  startDelay = 900,
}: Props) {
  const [displayed, setDisplayed] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [started, setStarted] = useState(false)

  // Initial delay before first character
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(timer)
  }, [startDelay])

  useEffect(() => {
    if (!started) return

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const currentRole = roles[currentIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          setDisplayed(currentRole.slice(0, displayed.length + 1))

          // Fully typed → pause
          if (displayed.length + 1 === currentRole.length) {
            setIsPaused(true)
          }
        } else {
          // Deleting backward
          setDisplayed(currentRole.slice(0, displayed.length - 1))

          // Fully deleted → move to next role
          if (displayed.length - 1 === 0) {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [
    displayed,
    isDeleting,
    isPaused,
    currentIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    started,
  ])

  return (
    <span className="font-mono text-xl md:text-2xl text-zinc-300 inline-flex items-center">
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(90deg, hsl(195,100%,65%), hsl(210,100%,70%))",
        }}
      >
        {displayed}
      </span>
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  )
}