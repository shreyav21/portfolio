// src/components/sections/Hero.tsx

"use client"

import { heroData } from "@/data/hero"
import { AnimatedText } from "../shared/AnimatedText"
import { TypewriterRole } from "../shared/TypewriterRole"
import { GradientMesh } from "../shared/GradientMesh"
import { ScrollIndicator } from "../shared/ScrollIndicator"
import { Badge } from "../badge"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"

const socialIconMap: Record<string, React.ReactNode> = {
//   github: <Github size={17} />,
//   linkedin: <Linkedin size={17} />,
//   twitter: <Twitter size={17} />,
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background ────────────────────────────── */}
      <GradientMesh />

      {/* ── Horizontal rule decorations ───────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(195 100% 55% / 0.3), transparent)",
        }}
      />

      {/* ── Main Content ──────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <div className="max-w-5xl">

          {/* Available badge */}
          {heroData.availableForWork && (
            <div
              className="animate-fade-up mb-8 inline-flex"
              style={{ animationDelay: "0ms" }}
            >
              <Badge
                variant="outline"
                className="font-mono text-xs tracking-wider border-zinc-700 bg-zinc-900/60 text-zinc-300 backdrop-blur-sm px-4 py-1.5 rounded-full"
              >
                <span className="pulse-dot" />
                Available for new opportunities
              </Badge>
            </div>
          )}

          {/* Greeting */}
          <div
            className="animate-fade-up font-mono text-sm md:text-base tracking-[0.2em] uppercase text-zinc-500 mb-3"
            style={{ animationDelay: "80ms" }}
          >
            {heroData.greeting}
          </div>

          {/* Name — big animated headline */}
          <h1 className="font-display font-bold leading-[1.0] mb-4">
            <AnimatedText
              text={heroData.name}
              delay={150}
              letterDelay={50}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-white"
            />
          </h1>

          {/* Typewriter roles */}
          <div
            className="animate-fade-up mb-8 flex items-center gap-3"
            style={{ animationDelay: "700ms" }}
          >
            <span
              className="hidden sm:block h-px w-10 bg-zinc-700"
            />
            <TypewriterRole roles={heroData.roles} startDelay={800} />
          </div>

          {/* Tagline */}
          <p
            className="animate-fade-up text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-serif"
            style={{ animationDelay: "900ms" }}
          >
            {heroData.tagline}
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-wrap items-center gap-4 mb-14"
            style={{ animationDelay: "1050ms" }}
          >
            <Button
              asChild
              size="lg"
              className="btn-glow font-mono font-medium tracking-wider rounded-full px-8 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                color: "#fff",
                border: "none",
              }}
            >
              <a href={heroData.cta.primary.href}>
                {heroData.cta.primary.label}
                <ArrowDown className="ml-2" size={16} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-mono font-medium tracking-wider rounded-full px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-300"
            >
             <a
  href={heroData.cta.secondary.href}
  target="_blank"
  rel="noopener noreferrer"
>
  <Download className="mr-2" size={16} />
  {heroData.cta.secondary.label}
</a>
            </Button>
          </div>

          {/* Socials */}
          {/* <div
            className="animate-fade-up flex items-center gap-5"
            style={{ animationDelay: "1200ms" }}
          >
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-600">
              Find me on
            </span>
            <span className="h-px w-8 bg-zinc-800" />
           
          </div> */}
        </div>
      </div>

      {/* ── Decorative side text ───────────────────── */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
        aria-hidden="true"
      >
        <div
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-700"
          style={{ writingMode: "vertical-rl" }}
        >
          Portfolio · 2025
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>

      {/* ── Scroll indicator ──────────────────────── */}
      <ScrollIndicator />
    </section>
  )
}