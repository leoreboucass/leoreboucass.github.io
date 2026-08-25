import About from '../components/About'
import ContactChannels from '../components/ContactChannels'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Experience />
      <ContactChannels />
    </>
  )
}
