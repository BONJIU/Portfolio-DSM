import { useState } from 'react'
import Grain from './components/Grain'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import ScrollyWord from './components/ScrollyWord'
import Constellation from './components/Constellation'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillsBand from './components/SkillsBand'
import Courses from './components/Courses'
import Final from './components/Final'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import { useReveal } from './hooks/useReveal'

function App() {
  const [modalProject, setModalProject] = useState(null)

  useReveal()

  return (
    <>
      <Grain />
      <Cursor />
      <Loader />
      <Nav />

      <main id="inicio">
        <Hero />
        <Marquee />
        <About />
        <ScrollyWord />
        <Constellation />
        <Experience />
        <Projects onOpenProject={setModalProject} />
        <SkillsBand />
        <Courses />
        <Final />
      </main>

      <Footer />

      <ProjectModal projectKey={modalProject} onClose={() => setModalProject(null)} />
    </>
  )
}

export default App
