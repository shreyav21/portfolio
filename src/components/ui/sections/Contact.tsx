// src/components/sections/Contact.tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactData } from "@/data/contact"
import { SectionLabel } from "../shared/SectionLabel"
import { useInView } from "@/hooks/useInView"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react"

// ─── Schema ─────────────────────────────────────────────
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
})

type FormValues = z.infer<typeof formSchema>

// ─── Icon map ────────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {

}

// ─── Reusable field wrapper ──────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-xs tracking-wider uppercase text-zinc-500">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-mono text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}

// ─── Social Card ─────────────────────────────────────────
function SocialCard({
  social,
  index,
  inView,
}: {
  social: (typeof contactData.socials)[0]
  index: number
  inView: boolean
}) {
  return (
     <a
      href={social.href}
      target={social.icon !== "mail" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "hsl(240 5% 9%)",
        borderColor: "hsl(240 5% 14%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${200 + index * 80}ms`,
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: `hsl(${social.color} 80% 55% / 0.08)`,
          border: `1px solid hsl(${social.color} 80% 55% / 0.2)`,
          color: `hsl(${social.color}, 80%, 65%)`,
        }}
      >
        {iconMap[social.icon]}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-xs tracking-wider uppercase text-zinc-600 mb-0.5">
          {social.label}
        </div>
        <div className="font-display font-medium text-zinc-300 group-hover:text-white transition-colors duration-200 text-sm truncate">
          {social.handle}
        </div>
      </div>
      <div
        className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
        style={{ color: `hsl(${social.color}, 80%, 65%)` }}
      >
        <Send size={13} />
      </div>
    </a>
  )
}

// ─── Availability Card ───────────────────────────────────
function AvailabilityCard({ inView }: { inView: boolean }) {
  const { availability } = contactData
  const isOpen = availability.status === "open"

  return (
    <div
      className="rounded-2xl p-6 border transition-all duration-700 delay-100"
      style={{
        background: isOpen ? "hsl(142 70% 45% / 0.04)" : "hsl(240 5% 9%)",
        borderColor: isOpen ? "hsl(142 70% 45% / 0.2)" : "hsl(240 5% 14%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background: isOpen ? "hsl(142 70% 45% / 0.1)" : "hsl(240 5% 14%)",
            border: isOpen
              ? "1px solid hsl(142 70% 45% / 0.25)"
              : "1px solid hsl(240 5% 18%)",
          }}
        >
          <Sparkles
            size={16}
            style={{ color: isOpen ? "hsl(142, 70%, 60%)" : "hsl(240 5% 50%)" }}
          />
        </div>
        <div>
          <div className="font-display font-semibold text-white text-sm">
            {availability.statusText}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: isOpen ? "#22c55e" : "#f59e0b",
                boxShadow: isOpen
                  ? "0 0 6px rgba(34,197,94,0.6)"
                  : "0 0 6px rgba(245,158,11,0.6)",
              }}
            />
            <span className="font-mono text-xs text-zinc-500">
              {isOpen ? "Actively looking" : "Limited availability"}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-2.5">
          Open to
        </div>
        <div className="flex flex-wrap gap-2">
          {availability.preferredRoles.map((role) => (
            <span
              key={role}
              className="font-mono text-[11px] px-3 py-1 rounded-full border border-zinc-800 text-zinc-400"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <Clock size={12} />
          Response time: {availability.responseTime}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <MapPin size={12} />
          Timezone: {availability.timezone}
        </div>
      </div>
    </div>
  )
}

// ─── Contact Form ────────────────────────────────────────
function ContactForm({ inView }: { inView: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: FormValues) => {
    setStatus("loading")
    await new Promise((res) => setTimeout(res, 1800))
    console.log("Form submitted:", values)
    setStatus("success")
    reset()
  }

  const inputStyle: React.CSSProperties = {
    background: "hsl(240 5% 11%)",
    border: "1px solid hsl(240 5% 16%)",
    color: "#e4e4e7",
  }

  return (
    <div
      className="rounded-2xl p-7 md:p-8 border transition-all duration-700"
      style={{
        background: "hsl(240 5% 9%)",
        borderColor: "hsl(240 5% 14%)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: "hsl(142 70% 45% / 0.1)",
              border: "1px solid hsl(142 70% 45% / 0.3)",
            }}
          >
            <CheckCircle2 size={28} style={{ color: "hsl(142, 70%, 60%)" }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-xl mb-2">
              Message sent!
            </h3>
            <p className="font-serif text-zinc-400 text-sm leading-relaxed max-w-xs">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 font-mono text-xs rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message}>
              <Input
                placeholder="Your name"
                {...register("name")}
                style={inputStyle}
                className="font-mono text-sm placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/40"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <Input
                placeholder="you@email.com"
                type="email"
                {...register("email")}
                style={inputStyle}
                className="font-mono text-sm placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/40"
              />
            </Field>
          </div>

          {/* Subject */}
          <Field label="Subject" error={errors.subject?.message}>
            <Input
              placeholder="What's this about?"
              {...register("subject")}
              style={inputStyle}
              className="font-mono text-sm placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/40"
            />
          </Field>

          {/* Message */}
          <Field label="Message" error={errors.message?.message}>
            <Textarea
              placeholder="Tell me about your project, idea, or just say hi..."
              rows={5}
              {...register("message")}
              style={inputStyle}
              className="font-mono text-sm placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/40 resize-none"
            />
          </Field>

          {/* Submit */}
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-mono text-sm tracking-wider rounded-full h-11 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, hsl(195,100%,40%), hsl(210,100%,50%))",
              color: "#fff",
              border: "none",
              boxShadow:
                status === "loading"
                  ? "none"
                  : "0 0 24px hsl(195 100% 55% / 0.25)",
            }}
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <Loader2 size={15} className="animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={15} />
                Send Message
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────
export function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, hsl(195 100% 40% / 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className="max-w-2xl mb-14 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <SectionLabel label={contactData.label} />
          <h2
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {contactData.headline[0]}{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(195,100%,65%), hsl(210,100%,70%))",
              }}
            >
              {contactData.headline[1]}
            </span>
          </h2>
          <p className="font-serif text-zinc-400 text-lg leading-relaxed">
            {contactData.subtext}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm inView={inView} />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            <AvailabilityCard inView={inView} />
            <div
              className="transition-all duration-700 delay-150"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-3">
                Find me on
              </div>
              <div className="flex flex-col gap-2">
                {contactData.socials.map((social, i) => (
                  <SocialCard
                    key={social.label}
                    social={social}
                    index={i}
                    inView={inView}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}