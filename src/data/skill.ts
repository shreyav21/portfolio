// src/data/skills.ts

export type Skill = {
  name: string
  icon: string       // emoji icon
  level: 1 | 2 | 3 | 4 | 5
  highlight?: boolean // shows accent color
}

export type SkillCategory = {
  id: string
  label: string
  description: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building fast, accessible, beautiful user interfaces.",
    skills: [
      { name: "React",       icon: "⚛️",  level: 5, highlight: true },
      { name: "Next.js",     icon: "▲",   level: 5, highlight: true },
      { name: "TypeScript",  icon: "🔷",  level: 4, highlight: true },
      { name: "JavaScript",  icon: "🟡",  level: 5 },
      { name: "Tailwind CSS",icon: "🎨",  level: 5 },
      { name: "HTML5",       icon: "🧱",  level: 5 },
      { name: "CSS3",        icon: "💅",  level: 4 },
      { name: "Framer Motion",icon: "🎞️", level: 3 },
      { name: "Redux",       icon: "🔄",  level: 3 },
      { name: "React Query", icon: "🔃",  level: 4 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Designing robust server-side systems and APIs.",
    skills: [
      { name: "Java",        icon: "☕",  level: 4, highlight: true },
      { name: "Spring Boot", icon: "🍃",  level: 4, highlight: true },
      { name: "Node.js",     icon: "🟢",  level: 3 },
      { name: "REST APIs",   icon: "🔌",  level: 5 },
      { name: "PostgreSQL",  icon: "🐘",  level: 3 },
      { name: "MySQL",       icon: "🗄️",  level: 3 },
      { name: "MongoDB",     icon: "🍃",  level: 2 },
      { name: "Docker",      icon: "🐳",  level: 2 },
    ],
  },
  {
    id: "design",
    label: "UI / Design",
    description: "Crafting design systems and high-fidelity prototypes.",
    skills: [
      { name: "Figma",        icon: "🎯", level: 4, highlight: true },
      { name: "UI Design",    icon: "🖼️", level: 4, highlight: true },
      { name: "UX Research",  icon: "🔬", level: 3 },
      { name: "Prototyping",  icon: "📱", level: 4 },
      { name: "Design Systems",icon: "🧩",level: 4 },
      { name: "Wireframing",  icon: "✏️", level: 4 },
      { name: "shadcn/ui",    icon: "⬛", level: 5 },
      { name: "Radix UI",     icon: "🔘", level: 4 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "The ecosystem I use to build and ship great software.",
    skills: [
      { name: "Git",          icon: "🌿", level: 5, highlight: true },
      { name: "GitHub",       icon: "🐙", level: 5 },
      { name: "VS Code",      icon: "💙", level: 5 },
      { name: "Vite",         icon: "⚡", level: 4 },
      { name: "Vercel",       icon: "▲",  level: 4 },
      { name: "Postman",      icon: "📮", level: 4 },
      { name: "Jira",         icon: "📋", level: 3 },
      { name: "Linux",        icon: "🐧", level: 3 },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    description: "What I'm actively exploring and levelling up in.",
    skills: [
      { name: "AWS",          icon: "☁️", level: 2, highlight: true },
      { name: "GraphQL",      icon: "◉",  level: 2 },
      { name: "Three.js",     icon: "🌐", level: 1 },
      { name: "WebGL",        icon: "🔺", level: 1 },
      { name: "Rust",         icon: "🦀", level: 1 },
      { name: "Kubernetes",   icon: "⚙️", level: 2 },
    ],
  },
]