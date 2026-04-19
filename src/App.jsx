import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import QuoteForm from './components/QuoteForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <QuoteForm />
      <FAQ />
      <Footer />
    </>
  )
}

export default App