// src/data/projects.ts

export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  live: string
  image: string // put screenshots in /public/projects/
  featured: boolean
  color: string // accent color per project
  status: "live" | "wip" | "archived"
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "DevLog",
    description:
      "Full-stack blogging platform for developers to write and share posts.",
    longDescription:
      "Built using Next.js, TypeScript, Spring Boot, MongoDB Atlas, and JWT authentication. Features secure authentication, post creation, likes system, profile-based content management, and responsive modern UI.",
    tech: [
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/shreyav21/devlog-frontend",
    live: "https://devlog-frontend-gamma.vercel.app/",
    image: "/devlog.png",
    featured: true,
    color: "270",
    status: "live",
  },
];