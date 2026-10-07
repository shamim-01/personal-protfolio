import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { Snapshot, About, Journey, Skills, Experience, Contact, Footer } from './components/Sections'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gradient-to-r from-lime to-data" style={{ scaleX }} />
      <Navbar />
      <main id="top">
        <Hero />
        <Snapshot />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
