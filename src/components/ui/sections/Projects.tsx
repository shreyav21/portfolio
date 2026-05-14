// src/components/sections/Projects.tsx
"use client"

import Image from "next/image"
import { projectsData , type Project } from "@/data/project"
import { SectionLabel } from "../shared/SectionLabel"
import { useInView } from "@/hooks/useInView"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ExternalLink } from "lucide-react"


// ─── Individual Project Card ────────────────────────────
function ProjectCard({
  project,
  index,
  size = "normal",
}: {
  project: Project
  index: number
  size?: "featured" | "normal" | "wide"
}) {
  const { ref, inView } = useInView()

  const isFeature = size === "featured"
  const isWide    = size === "wide"

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 100}ms`,
        background: "hsl(240 5% 9%)",
        border: "1px solid hsl(240 5% 14%)",
        gridColumn: isFeature ? "span 2" : isWide ? "span 2" : "span 1",
        minHeight: isFeature ? "460px" : isWide ? "220px" : "320px",
      }}
    >
      {/* ── Hover glow border ── */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          boxShadow: `inset 0 0 0 1px hsl(${project.color} 80% 60% / 0.35)`,
        }}
      />

      {/* ── Background image / gradient ── */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ willChange: "transform" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay — always visible */}
        <div
          className="absolute inset-0"
          style={{
            background: isFeature
              ? `linear-gradient(135deg, hsl(${project.color} 80% 8%) 0%, hsl(240 6% 7%) 60%)`
              : `linear-gradient(135deg, hsl(${project.color} 60% 6%) 0%, hsl(240 6% 7%) 70%)`,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className={`relative z-20 flex ${isWide ? "flex-row items-center gap-12" : "flex-col justify-end"} h-full p-7 md:p-8`}
      >
        {/* Wide layout: left side text */}
        <div className={isWide ? "flex-1" : ""}>
          {/* Top row: badges */}
          <div className="flex items-center gap-2 mb-4">
            {project.featured && (
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                style={{
                  background: `hsl(${project.color} 80% 55% / 0.15)`,
                  border: `1px solid hsl(${project.color} 80% 55% / 0.3)`,
                  color: `hsl(${project.color} 80% 70%)`,
                }}
              >
                ★ Featured
              </span>
            )}
            {project.status === "wip" && (
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400">
                In Progress
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-display font-bold text-white mb-2 leading-tight ${
              isFeature ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`font-serif text-zinc-400 leading-relaxed mb-5 ${
              isFeature ? "text-base max-w-md" : "text-sm"
            }`}
          >
            {isFeature ? project.longDescription : project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1 rounded-full border border-zinc-800 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-400 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links — right side for wide, bottom row for others */}
        <div
          className={`flex items-center gap-3 ${isWide ? "flex-col" : "mt-6"}`}
        >
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub`}
            className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white transition-all duration-200 group/link"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200">
             
            </div>

            {!isWide && (
              <span className="group-hover/link:text-white">Code</span>
            )}
          </a>

          {/* Live Link */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site`}
            className="flex items-center gap-2 font-mono text-xs transition-all duration-200 group/link"
            style={{ color: `hsl(${project.color} 80% 65%)` }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 group-hover/link:scale-105"
              style={{
                borderColor: `hsl(${project.color} 80% 55% / 0.3)`,
                background: `hsl(${project.color} 80% 55% / 0.08)`,
              }}
            >
              <ArrowUpRight size={15} />
            </div>

            {!isWide && <span>Live</span>}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section ────────────────────────────────────────────
export function Projects() {
  const { ref, inView } = useInView()

 const featured = projectsData[0];

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Faint accent glow in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, hsl(195 100% 40% / 0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* ── Header ──────────────────────────────── */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <SectionLabel label="02 / Projects" />
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Things I've{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(195,100%,65%), hsl(210,100%,70%))",
                }}
              >
                built
              </span>
            </h2>
          </div>

          {/* <div
            className="transition-all duration-700 delay-150"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-zinc-500 hover:text-white transition-colors duration-200 group"
            >
              View all on GitHub
              <ExternalLink
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div> */}
        </div>

        {/* ── Bento Grid ──────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {/* Row 1: Featured (spans full width on md) */}
          <ProjectCard project={featured} index={0} size="featured" />

          {/* Row 2: Two medium cards side by side */}

          {/* Row 3: Wide bottom card */}
          {/* <ProjectCard project={p4} index={3} size="wide" /> */}
        </div>

      </div>
    </section>
  )
}