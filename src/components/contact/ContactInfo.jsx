import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import AnimatedSection from '../utils/AnimatedSection'

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full">
      <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <AnimatedSection delay={0.1} className="flex items-start">
          <div className="mr-4 mt-1 text-primary">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Address</h4>
            <p className="text-gray-600">
              123 Business Avenue, Industrial Area<br />
              City, State 12345<br />
              Country
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="flex items-start">
          <div className="mr-4 mt-1 text-primary">
            <FaPhone size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
            <p className="text-gray-600">
              <a href="tel:+12345678900" className="hover:text-primary transition-colors">
                +1 (234) 567-8900
              </a>
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3} className="flex items-start">
          <div className="mr-4 mt-1 text-primary">
            <FaEnvelope size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">
              <a href="mailto:info@amm.com" className="hover:text-primary transition-colors">
                info@amm.com
              </a>
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <h4 className="font-medium text-gray-800 mb-3">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:info@amm.com"
              className="p-3 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <h4 className="font-medium text-gray-800 mb-3">Business Hours</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default ContactInfo
