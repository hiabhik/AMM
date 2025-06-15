import { motion } from 'framer-motion'

const ContactInfo = () => {
  const contactDetails = [
    {
      title: 'Managing Director',
      content: 'Anuradha Singh',
      icon: '👤'
    },
    {
      title: 'Company',
      content: 'Anuradha Minerals and Metals',
      icon: '🏢'
    },
    {
      title: 'Website',
      content: 'www.ammindia.in',
      icon: '🌐'
    },
    {
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      icon: '🕒'
    }
  ]

  const businessInfo = [
    {
      title: 'Our Specialties',
      items: ['Aluminium Ingots', 'Calcined Lime', 'Glycerin', 'Scrap Materials']
    },
    {
      title: 'Industries We Serve',
      items: ['Automotive', 'Aerospace', 'Construction', 'Manufacturing', 'Chemical Processing']
    }
  ]

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
        
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl">{detail.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                <p className="text-gray-600">{detail.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Business Information */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-primary mb-6">Business Information</h2>
        
        <div className="space-y-6">
          {businessInfo.map((info, index) => (
            <div key={info.title}>
              <h3 className="font-semibold text-secondary mb-3">{info.title}</h3>
              <ul className="space-y-2">
                {info.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-secondary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="bg-secondary text-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="mb-6 opacity-90">
          Contact us today for competitive quotes and exceptional service.
        </p>
        <div className="space-y-2">
          <p className="font-semibold">Quick Response Guaranteed</p>
          <p className="text-sm opacity-80">We typically respond within 24 hours</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactInfo
