// src/data/contact.ts

export const contactData = {
  label: "05 / Contact",
  headline: ["Let's work", "together"],
  accentWord: "together",
  subtext:
    "Have a project in mind, an opportunity to discuss, or just want to say hello? My inbox is always open.",
  availability: {
    status: "open",  // "open" | "busy" | "closed"
    statusText: "Available for new projects",
    preferredRoles: [
      "Frontend Developer",
      "React Developer",
      "Full Stack Developer",
      "UI Engineer",
    ],
    responseTime: "Within 24 hours",
    timezone: "IST (UTC +5:30)",
  },
  socials: [
    {
      label: "GitHub",
      handle: "@yourusername",
      href: "https://github.com/yourusername",
      icon: "github",
      color: "240",
    },
    {
      label: "LinkedIn",
      handle: "Your Name",
      href: "https://linkedin.com/in/yourusername",
      icon: "linkedin",
      color: "210",
    },
    {
      label: "Twitter",
      handle: "@yourusername",
      href: "https://twitter.com/yourusername",
      icon: "twitter",
      color: "195",
    },
    {
      label: "Email",
      handle: "you@email.com",
      href: "mailto:you@email.com",
      icon: "mail",
      color: "340",
    },
  ],
}