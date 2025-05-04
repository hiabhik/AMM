import AboutHero from '../components/about/AboutHero'
import CompanyOverview from '../components/about/CompanyOverview'
import VisionMission from '../components/about/VisionMission'
import Values from '../components/about/Values'
import CtaSection from '../components/home/CtaSection'
import PageTransition from '../components/utils/PageTransition'

const About = () => {
  return (
    <PageTransition>
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <Values />
      <CtaSection />
    </PageTransition>
  )
}

export default About
