// src/app/page.tsx
import { Navbar } from "@/components/ui/layout/Navbar"
import { Hero } from "@/components/ui/sections/Hero"
import { About } from "@/components/ui/sections/About"
import { Projects } from "@/components/ui/sections/Projects"
import { Skills } from "@/components/ui/sections/Skills"
import { Experience } from "@/components/ui/sections/Experience"
import { Contact } from "@/components/ui/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
         <Projects />
           <Skills />
  
        <Experience />
       <Contact/>
      </main>
    </>
  )
}