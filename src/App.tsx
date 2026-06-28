import { HelmetProvider } from 'react-helmet-async'
import SEO from './utils/SEO'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import FeaturedProperties from './components/sections/FeaturedProperties'
import PropertySearch from './components/sections/PropertySearch'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Statistics from './components/sections/Statistics'
import Neighborhood from './components/sections/Neighborhood'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <PropertySearch />
        <About />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Neighborhood />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  )
}
