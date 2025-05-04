import { Link } from 'react-router-dom'
import { FaShieldAlt, FaHandshake, FaGlobe } from 'react-icons/fa'
import AnimatedSection from '../utils/AnimatedSection'

const AboutSection = () => {
  const values = [
    {
      icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
      title: 'Quality Assurance',
      description: 'We ensure all our products meet the highest industry standards and specifications.',
    },
    {
      icon: <FaHandshake className="w-10 h-10 text-primary" />,
      title: 'Customer Commitment',
      description: 'We build long-term relationships based on trust, reliability, and exceptional service.',
    },
    {
      icon: <FaGlobe className="w-10 h-10 text-primary" />,
      title: 'Global Reach',
      description: 'We serve clients worldwide with efficient logistics and international trade expertise.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AnimatedSection direction="left">
            <div>
              <h2 className="mb-6 text-primary">About AMM</h2>
              <p className="mb-6 text-lg text-gray-700">
                Anuradha Minerals and Metals (AMM) is a leading trading company specializing in high-quality minerals and metals for industries worldwide.
              </p>
              <p className="mb-6 text-lg text-gray-700">
                With years of experience in the industry, we have established ourselves as a reliable supplier of premium products including Aluminium Ingots, Calcined Lime, Glycerin, and various types of Scrap materials.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Our commitment to quality, competitive pricing, and exceptional customer service has made us a trusted partner for businesses across various sectors.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
