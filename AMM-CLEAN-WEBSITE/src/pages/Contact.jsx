import ContactHero from '../components/contact/ContactHero'
import FuturisticContactSection from '../components/contact/FuturisticContactSection'
import PageTransition from '../components/utils/PageTransition'

const Contact = () => {
  return (
    <PageTransition>
      <ContactHero />
      <FuturisticContactSection />
    </PageTransition>
  )
}

export default Contact
