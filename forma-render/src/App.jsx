import Cursor    from './components/Cursor'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Divider   from './components/Divider'
import Services  from './components/Services'
import Portfolio from './components/Portfolio'
import Process   from './components/Process'
import TechStrip from './components/TechStrip'
import About     from './components/About'
import CTA       from './components/CTA'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Fixed grid background */}
      <div className="grid-overlay fixed inset-0 pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Divider />
        <Services />
        <Divider />
        <Portfolio />
        <Divider />
        <Process />
        <TechStrip />
        <About />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
