// src/components/sections/About.tsx
"use client"

import Image from "next/image"
import { aboutData } from "@/data/about"
import { SectionLabel } from "../shared/SectionLabel"
import { AnimatedCounter } from "../shared/AnimatedCounter"
import { useInView } from "@/hooks/useInView"
import { Separator } from "@/components/ui/separator"

export function About() {
  const { ref: sectionRef, inView } = useInView()
  const { ref: statsRef, inView: statsInView } = useInView()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* ── Subtle background grid ─────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Text content ─────────────────── */}
          <div>
            {/* Label */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <SectionLabel label={aboutData.label} />
            </div>

            {/* Headline */}
            <h2
              className="font-display font-bold leading-[1.05] mb-8 transition-all duration-700 delay-100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {aboutData.headline.map((word, i) =>
                word === aboutData.accentWord ? (
                  <span
                    key={i}
                    className="block text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, hsl(195,100%,65%), hsl(210,100%,70%))",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span key={i} className="block text-white">
                    {word}
                  </span>
                )
              )}
            </h2>

            {/* Bio */}
            <div
              className="space-y-4 mb-10 transition-all duration-700 delay-200"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {aboutData.bio.map((para, i) => (
                <p
                  key={i}
                  className="font-serif text-zinc-400 leading-relaxed text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Fun facts pills */}
            <div
              className="flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {aboutData.facts.map((fact) => (
                <span
                  key={fact.text}
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wide px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 bg-zinc-900/50 hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200 cursor-default"
                >
                  <span>{fact.emoji}</span>
                  {fact.text}
                </span>
              ))}
            </div>

            <Separator className="bg-zinc-800 mb-10" />

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 transition-all duration-700 delay-400"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="group">
                  <div
                    className="font-display font-bold text-3xl md:text-4xl text-white mb-1"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      trigger={statsInView}
                      duration={1600 + i * 200}
                    />
                  </div>
                  <div className="font-mono text-xs tracking-wider uppercase text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo card ──────────────────── */}
          <div
            className="relative flex justify-center lg:justify-end transition-all duration-1000 delay-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
            }}
          >
            {/* Decorative elements behind the photo */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
              style={{
                border: "1px solid hsl(195 100% 55% / 0.2)",
                borderRadius: "1rem",
                maxWidth: "360px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, hsl(195,100%,40%,0.15), hsl(210,100%,50%,0.1))",
                border: "1px solid hsl(195 100% 55% / 0.15)",
              }}
              aria-hidden="true"
            />

            {/* Photo */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "3 / 4",
                background: "hsl(240 5% 10%)",
                border: "1px solid hsl(240 5% 16%)",
              }}
            >
              {/* Fallback gradient when no image */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(240,6%,12%) 0%, hsl(240,5%,8%) 100%)",
                }}
              />

              {/* Replace with your actual photo */}
              <Image
                src={aboutData.image}
                alt="Profile photo"
                fill
                className="object-cover"
                onError={(e) => {
                  // Hide broken image, show gradient fallback
                  ;(e.target as HTMLImageElement).style.display = "none"
                }}
              />

              {/* Overlay gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, hsl(240 6% 7%), transparent)",
                }}
              />

              {/* Floating name tag at bottom of photo */}
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(9,9,11,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="font-display font-semibold text-white text-sm">
                    Shreya Vedpathak
                  </div>
                  <div
                    className="font-mono text-xs"
                    style={{ color: "hsl(195, 100%, 55%)" }}
                  >
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}