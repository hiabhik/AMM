import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import CtaSection from '../components/home/CtaSection'
import DirectorMessage from '../components/home/DirectorMessage'
import PageTransition from '../components/utils/PageTransition'

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <DirectorMessage />
      <FeaturedProducts />
      <CtaSection />
    </PageTransition>
  )
}

export default Home
