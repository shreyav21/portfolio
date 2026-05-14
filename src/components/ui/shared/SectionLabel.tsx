// src/components/shared/SectionLabel.tsx

type Props = {
  label: string
}

export function SectionLabel({ label }: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span
        className="font-mono text-xs tracking-[0.25em] uppercase"
        style={{ color: "hsl(195, 100%, 55%)" }}
      >
        {label}
      </span>
      <span
        className="h-px flex-1 max-w-[60px]"
        style={{
          background:
            "linear-gradient(90deg, hsl(195 100% 55% / 0.5), transparent)",
        }}
      />
    </div>
  )
}