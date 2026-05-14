// src/components/layout/Navbar.tsx
"use client"

import { useState } from "react"
import { navLinks, navConfig } from "@/data/nav"
import { useScrolled } from "@/hooks/useScrolled"
import { useActiveSection } from "@/hooks/useActiveSection"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const sectionIds = navLinks.map((l) => l.href.replace("#", ""))

export function Navbar() {
  const scrolled = useScrolled(60)
  const active = useActiveSection(sectionIds)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(9, 9, 11, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
            <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            {/* Monogram box */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm transition-all duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                color: "#fff",
                boxShadow: "0 0 16px hsl(195 100% 55% / 0.25)",
              }}
            >
              {navConfig.logo}
            </div>
            <span className="font-display font-semibold text-sm text-zinc-400 group-hover:text-white transition-colors duration-200 hidden sm:block">
              {navConfig.logoFull}
            </span>
          </a>

          {/* ── Desktop Nav ───────────────────────── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "")
              const isActive = active === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 group"
                  style={{
                    color: isActive ? "#fff" : "hsl(240 5% 55%)",
                  }}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                  {/* Hover underline */}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px transition-all duration-300 rounded-full"
                    style={{
                      width: isActive ? "20px" : "0px",
                      background: "hsl(195, 100%, 55%)",
                    }}
                  />
                  <span className="relative">{link.label}</span>
                </button>
              )
            })}
          </nav>

          {/* ── Desktop CTA ───────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="font-mono text-xs tracking-wider rounded-full px-5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                color: "#fff",
                border: "none",
              }}
              onClick={() => handleNavClick("#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* ── Mobile Hamburger ──────────────────── */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 border-zinc-800 p-0"
                style={{ background: "hsl(240, 6%, 7%)" }}
              >
                {/* Sheet Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-xs"
                      style={{
                        background: "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                        color: "#fff",
                      }}
                    >
                      {navConfig.logo}
                    </div>
                    <span className="font-display font-semibold text-sm text-zinc-300">
                      {navConfig.logoFull}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-500 hover:text-white hover:bg-zinc-800 -mr-2"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </Button>
                </div>

                {/* Sheet Links */}
                <nav className="px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link, i) => {
                    const id = link.href.replace("#", "")
                    const isActive = active === id
                    return (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200 group"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.05)"
                            : "transparent",
                          color: isActive ? "#fff" : "hsl(240 5% 55%)",
                          animationDelay: `${i * 60}ms`,
                        }}
                      >
                        <span
                          className="font-mono text-xs"
                          style={{ color: "hsl(195, 100%, 55%)" }}
                        >
                          0{i + 1}
                        </span>
                        <span className="font-display font-medium text-base">
                          {link.label}
                        </span>
                        {isActive && (
                          <span
                            className="ml-auto w-1.5 h-1.5 rounded-full"
                            style={{ background: "hsl(195, 100%, 55%)" }}
                          />
                        )}
                      </button>
                    )
                  })}
                </nav>

                {/* Sheet Footer */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-zinc-800">
                  <Button
                    className="w-full font-mono text-sm tracking-wider rounded-full"
                    style={{
                      background: "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => handleNavClick("#contact")}
                  >
                    Hire Me
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}