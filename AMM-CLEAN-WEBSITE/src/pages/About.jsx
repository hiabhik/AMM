import AboutHero from '../components/about/AboutHero'
import CompanyHistory from '../components/about/CompanyHistory'
import ProfessionalTimeline from '../components/about/ProfessionalTimeline'
import Leadership from '../components/about/Leadership'
import Certifications from '../components/about/Certifications'
import PageTransition from '../components/utils/PageTransition'

const About = () => {
  return (
    <PageTransition>
      <AboutHero />
      <CompanyHistory />
      <ProfessionalTimeline />
      <Leadership />
      <Certifications />
    </PageTransition>
  )
}

export default About
