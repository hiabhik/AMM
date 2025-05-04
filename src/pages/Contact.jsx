import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import PageTransition from '../components/utils/PageTransition'
import AnimatedSection from '../components/utils/AnimatedSection'

const Contact = () => {
  return (
    <PageTransition>
      <ContactHero />
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection className="section-title">
            <h2>Our Location</h2>
            <p>Visit us at our headquarters</p>
          </AnimatedSection>
          
          <AnimatedSection className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1634120762028!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="AMM Location"
            ></iframe>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
