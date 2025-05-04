import { FaCheckCircle, FaUserFriends, FaLeaf, FaLightbulb, FaBalanceScale, FaGlobeAmericas } from 'react-icons/fa'
import AnimatedSection from '../utils/AnimatedSection'

const Values = () => {
  const values = [
    {
      icon: <FaCheckCircle className="w-12 h-12 text-primary" />,
      title: 'Quality',
      description: 'We are committed to providing products that meet or exceed industry standards and customer expectations.',
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-primary" />,
      title: 'Customer Focus',
      description: 'We prioritize understanding and fulfilling our customers\' needs with personalized service and solutions.',
    },
    {
      icon: <FaLeaf className="w-12 h-12 text-primary" />,
      title: 'Sustainability',
      description: 'We promote environmentally responsible practices throughout our operations and supply chain.',
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-primary" />,
      title: 'Innovation',
      description: 'We continuously seek new ways to improve our products, services, and processes.',
    },
    {
      icon: <FaBalanceScale className="w-12 h-12 text-primary" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and adherence to ethical standards.',
    },
    {
      icon: <FaGlobeAmericas className="w-12 h-12 text-primary" />,
      title: 'Global Perspective',
      description: 'We embrace diversity and maintain a global outlook in our business relationships and operations.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <AnimatedSection className="section-title">
          <h2>Our Core Values</h2>
          <p>The principles that guide our actions and decisions</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              delay={0.2 + index * 0.1}
            >
              <div className="h-full p-6 bg-white rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
