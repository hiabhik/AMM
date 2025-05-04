import { FaEye, FaRocket } from 'react-icons/fa'
import AnimatedSection from '../utils/AnimatedSection'

const VisionMission = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimatedSection className="section-title">
          <h2>Vision & Mission</h2>
          <p>Guiding principles that drive our business forward</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <div className="h-full p-8 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <FaEye className="w-10 h-10 text-primary" />
                <h3 className="ml-4 text-2xl font-semibold text-primary">Our Vision</h3>
              </div>
              <p className="mb-4 text-gray-700">
                To be the most trusted global supplier of high-quality minerals and metals, recognized for our product excellence, reliability, and customer-centric approach.
              </p>
              <p className="text-gray-700">
                We envision a future where AMM is the first choice for businesses seeking premium materials, innovative solutions, and long-term partnerships in the minerals and metals industry.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="h-full p-8 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <FaRocket className="w-10 h-10 text-primary" />
                <h3 className="ml-4 text-2xl font-semibold text-primary">Our Mission</h3>
              </div>
              <p className="mb-4 text-gray-700">
                To provide superior quality minerals and metals that meet the highest industry standards while delivering exceptional value and service to our customers.
              </p>
              <p className="text-gray-700">
                We are committed to ethical sourcing, sustainable practices, continuous improvement, and building lasting relationships with our stakeholders based on trust, transparency, and mutual growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
