// src/components/sections/Experience.tsx
"use client"

import { workExperience, education } from "@/data/experience"
import { SectionLabel } from "../shared/SectionLabel"
import { useInView } from "@/hooks/useInView"
import { Briefcase, GraduationCap, MapPin, ExternalLink, Calendar } from "lucide-react"

// ─── Type badge ─────────────────────────────────────────
const typeLabelMap: Record<string, string> = {
  "full-time":  "Full-time",
  "part-time":  "Part-time",
  "contract":   "Contract",
  "internship": "Internship",
}

// ─── Work Card ──────────────────────────────────────────
function WorkCard({
  item,
  index,
}: {
  item: (typeof workExperience)[0]
  index: number
}) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className="relative pl-8 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10"
        style={{
          borderColor: `hsl(${item.color}, 80%, 55%)`,
          background: inView
            ? `hsl(${item.color}, 80%, 55%)`
            : "hsl(240 6% 7%)",
          boxShadow: inView
            ? `0 0 12px hsl(${item.color} 80% 55% / 0.5)`
            : "none",
        }}
      />

      {/* Card */}
      <div
        className="group rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "hsl(240 5% 9%)",
          borderColor: "hsl(240 5% 14%)",
        }}
      >
        {/* Card hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px hsl(${item.color} 80% 55% / 0.2)`,
          }}
        />

        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-white text-lg md:text-xl mb-1">
              {item.role}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              {item.companyUrl ? (
                
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-sm hover:text-white transition-colors duration-200 group/link"
                  style={{ color: `hsl(${item.color}, 80%, 65%)` }}
                >
                  {item.company}
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                  />
                </a>
              ) : (
                <span
                  className="font-mono text-sm"
                  style={{ color: `hsl(${item.color}, 80%, 65%)` }}
                >
                  {item.company}
                </span>
              )}
              <span className="text-zinc-700">·</span>
              <span
                className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                style={{
                  background: `hsl(${item.color} 80% 55% / 0.1)`,
                  border: `1px solid hsl(${item.color} 80% 55% / 0.2)`,
                  color: `hsl(${item.color} 80% 70%)`,
                }}
              >
                {typeLabelMap[item.type]}
              </span>
            </div>
          </div>

          {/* Dates + location */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
              <Calendar size={11} />
              {item.startDate} — {item.endDate}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-600">
              <MapPin size={11} />
              {item.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-serif text-zinc-400 text-sm leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-5">
          {item.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-zinc-400"
            >
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: `hsl(${item.color}, 80%, 55%)` }}
              />
              <span className="font-serif leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-3 py-1 rounded-full border border-zinc-800 text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Education Card ─────────────────────────────────────
function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0]
  index: number
}) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className="relative pl-8 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 z-10"
        style={{
          borderColor: `hsl(${item.color}, 80%, 55%)`,
          background: inView
            ? `hsl(${item.color}, 80%, 55%)`
            : "hsl(240 6% 7%)",
          boxShadow: inView
            ? `0 0 12px hsl(${item.color} 80% 55% / 0.5)`
            : "none",
        }}
      />

      {/* Card */}
      <div
        className="group rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "hsl(240 5% 9%)",
          borderColor: "hsl(240 5% 14%)",
        }}
      >
        {/* Card hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px hsl(${item.color} 80% 55% / 0.2)`,
          }}
        />

        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-1">
              {item.degree}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              {item.institutionUrl ? (
                
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-sm hover:text-white transition-colors duration-200 group/link"
                  style={{ color: `hsl(${item.color}, 80%, 65%)` }}
                >
                  {item.institution}
                  <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span
                  className="font-mono text-sm"
                  style={{ color: `hsl(${item.color}, 80%, 65%)` }}
                >
                  {item.institution}
                </span>
              )}
              {item.grade && (
                <>
                  <span className="text-zinc-700">·</span>
                  <span
                    className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                    style={{
                      background: `hsl(${item.color} 80% 55% / 0.1)`,
                      border: `1px solid hsl(${item.color} 80% 55% / 0.2)`,
                      color: `hsl(${item.color} 80% 70%)`,
                    }}
                  >
                    {item.grade}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Dates + location */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500">
              <Calendar size={11} />
              {item.startDate} — {item.endDate}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-600">
              <MapPin size={11} />
              {item.location}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
        {(item.highlights ?? []).map((highlight, i) => (
  <li
    key={i}
    className="flex items-start gap-3 text-sm text-zinc-400"
  >
    <span
      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
      style={{ background: `hsl(${item.color}, 80%, 55%)` }}
    />
    <span className="font-serif leading-relaxed">{highlight}</span>
  </li>
))}
        </ul>
      </div>
    </div>
  )
}

// ─── Section ────────────────────────────────────────────
export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section
      id="experience"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, hsl(195 100% 40% / 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* ── Header ────────────────────────────── */}
        <div
          ref={ref}
          className="max-w-2xl mb-16 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel label="04 / Experience" />
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
              journey
            </span>
          </h2>
          <p className="font-serif text-zinc-400 text-lg leading-relaxed">
            Where I've worked and studied — the experiences that shaped how I
            think and build.
          </p>
        </div>

        {/* ── Two column layout ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* ── Work column ───────────────────── */}
          <div>
            {/* Column header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(195 100% 55% / 0.1)",
                  border: "1px solid hsl(195 100% 55% / 0.2)",
                }}
              >
                <Briefcase size={16} style={{ color: "hsl(195, 100%, 65%)" }} />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">
                Work Experience
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-5 bottom-5 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(195 100% 55% / 0.4), hsl(195 100% 55% / 0.1), transparent)",
                }}
              />

              <div className="space-y-6">
                {workExperience.map((item, i) => (
                  <WorkCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Education column ──────────────── */}
          <div>
            {/* Column header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "hsl(340 80% 55% / 0.1)",
                  border: "1px solid hsl(340 80% 55% / 0.2)",
                }}
              >
                <GraduationCap size={16} style={{ color: "hsl(340, 80%, 70%)" }} />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">
                Education
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-5 bottom-5 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(340 80% 55% / 0.4), hsl(340 80% 55% / 0.1), transparent)",
                }}
              />

              <div className="space-y-6">
                {education.map((item, i) => (
                  <EducationCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}