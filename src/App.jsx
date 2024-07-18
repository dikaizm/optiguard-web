import HeroSection from './sections/HeroSection'
import HeaderNav from './components/HeaderNav'
import FeatureSection from './sections/FeatureSection'
import AboutSection from './sections/AboutSection'
import AdaptorSection from './sections/AdaptorSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <HeaderNav />
      <div className='relative w-full min-h-screen'>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <AdaptorSection />

        <Footer />
      </div>
    </>
  )
}

export default App
