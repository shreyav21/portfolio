// src/components/shared/AnimatedText.tsx

type Props = {
  text: string
  className?: string
  delay?: number       // ms before first letter starts
  letterDelay?: number // ms between each letter
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  letterDelay = 45,
}: Props) {
  return (
    <span
      className={className}
      aria-label={text}
      role="text"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="animate-letter"
          style={{ animationDelay: `${delay + i * letterDelay}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}