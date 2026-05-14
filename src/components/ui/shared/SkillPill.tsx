// src/components/shared/SkillPill.tsx
"use client"

import { type Skill } from "@/data/skill"

type Props = {
  skill: Skill
  index: number
  visible: boolean
}

export function SkillPill({ skill, index, visible }: Props) {
  return (
    <div
      className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-300 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${index * 45}ms`,
        background: skill.highlight
          ? "hsl(195 100% 55% / 0.04)"
          : "hsl(240 5% 9%)",
        borderColor: skill.highlight
          ? "hsl(195 100% 55% / 0.18)"
          : "hsl(240 5% 14%)",
      }}
    >
      {/* Left: icon + name */}
      <div className="flex items-center gap-3">
        <span
          className="text-lg w-7 text-center leading-none select-none"
          aria-hidden="true"
        >
          {skill.icon}
        </span>
        <span
          className="font-mono text-sm transition-colors duration-200"
          style={{
            color: skill.highlight
              ? "hsl(195 80% 70%)"
              : "hsl(240 5% 70%)",
          }}
        >
          {skill.name}
        </span>
      </div>

      {/* Right: proficiency dots */}
      <div className="flex items-center gap-1" aria-label={`Proficiency: ${skill.level} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
            style={{
              background:
                i < skill.level
                  ? skill.highlight
                    ? "hsl(195, 100%, 55%)"
                    : "hsl(240 5% 55%)"
                  : "hsl(240 5% 20%)",
              transform:
                i < skill.level ? "scale(1)" : "scale(0.8)",
            }}
          />
        ))}
      </div>
    </div>
  )
}