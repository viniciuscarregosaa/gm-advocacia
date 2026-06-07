import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Differentials from './sections/Differentials'
import HowItWorks from './sections/HowItWorks'
import BPC from './sections/BPC'
import Results from './sections/Results'
import About from './sections/About'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-cream overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <HowItWorks />
        <BPC />
        <Results />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
