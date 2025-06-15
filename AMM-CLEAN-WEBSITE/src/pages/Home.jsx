import HeroSection from '../components/home/HeroSection'
import CompanyIntro from '../components/home/CompanyIntro'
import FuturisticStats from '../components/home/FuturisticStats'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PageTransition from '../components/utils/PageTransition'

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <CompanyIntro />
      <FuturisticStats />
      <WhyChooseUs />
    </PageTransition>
  )
}

export default Home
