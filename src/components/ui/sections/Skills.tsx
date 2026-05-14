// src/components/sections/Skills.tsx
"use client"

import { useState } from "react"
import { skillsData } from "@/data/skill"
import { SectionLabel } from "../shared/SectionLabel"
import { SkillPill } from "../shared/SkillPill"
import { useInView } from "@/hooks/useInView"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function Skills() {
  const { ref, inView } = useInView()
  const [activeTab, setActiveTab] = useState("frontend")
  const [animating, setAnimating] = useState(false)

  const handleTabChange = (value: string) => {
    // Briefly hide pills so they re-animate on every tab switch
    setAnimating(true)
    setTimeout(() => {
      setActiveTab(value)
      setAnimating(false)
    }, 120)
  }

  const activeCategory = skillsData.find((c) => c.id === activeTab)!

  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background accent glow */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, hsl(270 70% 50% / 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* ── Header ────────────────────────────────── */}
        <div
          ref={ref}
          className="max-w-2xl mb-14 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel label="03 / Skills" />
          <h2
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(195,100%,65%), hsl(210,100%,70%))",
              }}
            >
              toolkit
            </span>
          </h2>
          <p className="font-serif text-zinc-400 text-lg leading-relaxed">
            Technologies and tools I use to bring ideas to life — from
            pixel-perfect UIs to production-ready backends.
          </p>
        </div>

        {/* ── Tabs ──────────────────────────────────── */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          {/* Tab triggers */}
          <TabsList
            className="flex flex-wrap gap-2 bg-transparent p-0 h-auto mb-10 justify-start"
          >
            {skillsData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-200 data-[state=inactive]:bg-transparent data-[state=inactive]:text-zinc-500 data-[state=inactive]:border-zinc-800 data-[state=inactive]:hover:border-zinc-600 data-[state=inactive]:hover:text-zinc-300"
                style={
                  activeTab === category.id
                    ? {
                        background:
                          "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                        color: "#fff",
                        border: "1px solid transparent",
                        boxShadow: "0 0 20px hsl(195 100% 55% / 0.2)",
                      }
                    : {}
                }
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content — single panel, we manage content manually for animation */}
          {skillsData.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0 outline-none"
            >
              {/* Category description */}
              <p
                className="font-mono text-xs tracking-wider text-zinc-600 mb-6 transition-all duration-300"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(8px)" : "translateY(0)",
                }}
              >
                {activeCategory.description}
              </p>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {activeCategory.skills.map((skill, i) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    index={i}
                    visible={!animating}
                  />
                ))}
              </div>

              {/* Skill count */}
              <p
                className="font-mono text-xs text-zinc-700 mt-6 transition-all duration-300 delay-300"
                style={{
                  opacity: animating ? 0 : 1,
                }}
              >
                {activeCategory.skills.length} skills in this category
              </p>
            </TabsContent>
          ))}
        </Tabs>

        {/* ── Bottom summary bar ────────────────────── */}
        <div
          className="mt-16 pt-10 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {[
            { label: "Total Skills",    value: skillsData.reduce((acc, c) => acc + c.skills.length, 0) + "+" },
            { label: "Categories",      value: skillsData.length.toString() },
            { label: "Years Learning",  value: "3+" },
            { label: "Always",          value: "Curious" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="font-display font-bold text-2xl text-white mb-1"
              >
                {item.value}
              </div>
              <div className="font-mono text-xs tracking-wider uppercase text-zinc-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}