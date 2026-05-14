// src/data/experience.ts

export type WorkExperience = {
  id: string
  role: string
  company: string
  companyUrl?: string
  location: string
  type: "full-time" | "part-time" | "contract" | "internship"
  startDate: string
  endDate: string | "Present"
  description: string
  achievements: string[]
  tech: string[]
  color: string 
}

export type Education = {
  id: string
  degree: string
  institution: string
  institutionUrl?: string
  location: string
  startDate: string
  endDate: string | "Present"
  grade?: string
  highlights?: string[]
  color: string
}

export const workExperience: WorkExperience[] = [
  {
    id: "work-1",
    role: "Frontend Developer Intern",
    company: "Anervea.ai (Growwman Group).",
    companyUrl: "https://example.com",
    location: "Pune, India",
    type: "internship",
    startDate: "October 2025",
    endDate: "April 2026",
    description:
      "Building and maintaining customer-facing React applications used by 50k+ users daily.",
    achievements: [
      "Rebuilt the core dashboard with Next.js App Router, reducing load time by 40%",
      "Designed and implemented a reusable component library used across 3 products",
      "Led migration from JavaScript to TypeScript across 2 major codebases",
      "Collaborated with designers in Figma to ship pixel-perfect UI features",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind",],
    color: "195",
  },
  {
    id: "work-2",
    role: "Android Developer Intern",
    company: "Revolution IT Solution",
    companyUrl: "https://example.com",
    location: "Kolhapur",
    type: "internship",
    startDate: "May 2023",
    endDate: "June 2023",
    description:
      "Joined as an intern, contributed to multiple client projects and grew into a junior developer role.",
    achievements: [
      "Built responsive landing pages for 5 client projects using React and Tailwind",
      "Integrated REST APIs and handled async state with React Query",
      "Improved Lighthouse accessibility score from 62 to 94 on a key product",
    ],
    tech: ["React", "JavaScript", "Tailwind", "REST APIs"],
    color: "270",
  },
]

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "D.Y Patil College of Engineering & Technology",
    institutionUrl: "https://example.com",
    location: "Kolhapur, Maharashtra",
    startDate: "2021",
    endDate: "2025",
    grade: "7.8 CGPA",
    highlights: [
      "Specialised in web technologies and software engineering",
      "Final year project: Full-stack collaborative task management tool",
      "Active member of the university coding club",
    ],
    color: "340",
  },
  {
    id: "edu-2",
    degree: "HSC — Science (PCM + CS)",
    institution: "Yashwantrao Chavan College of Science",
    location: "Karad, Maharashtra",
    startDate: "2020",
    endDate: "2021",
    grade: "84.64%",
    color: "45",
  },
]