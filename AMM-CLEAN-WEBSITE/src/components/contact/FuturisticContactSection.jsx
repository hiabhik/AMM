import { motion } from 'framer-motion'
import { useState } from 'react'

const FuturisticContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productInterest: '',
      message: ''
    })
  }

  const contactMethods = [
    {
      title: 'Direct Communication',
      description: 'Speak directly with our steel industry experts',
      icon: '📞',
      details: ['Phone: +91-XXXX-XXXXX', 'WhatsApp: Available 24/7', 'Video Calls: Scheduled']
    },
    {
      title: 'Technical Support',
      description: 'Get detailed product specifications and technical guidance',
      icon: '⚙️',
      details: ['Technical Team', 'Product Datasheets', 'Custom Solutions']
    },
    {
      title: 'Global Reach',
      description: 'Serving steel plants across 15+ countries',
      icon: '🌍',
      details: ['International Shipping', 'Local Representatives', 'Multi-language Support']
    }
  ]

  const productOptions = [
    'Aluminium Ingots',
    'Aluminium Scrap',
    'Heavy Metal Scrap',
    'Glycine',
    'Briquettes',
    'Soda Ash',
    'Calcined Lime',
    'Chemical Products',
    'Custom Requirements',
    'General Inquiry'
  ]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(201, 166, 100, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(201, 166, 100, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(15, 52, 96, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(15, 52, 96, 0.1) 75%)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Connect with <span className="text-secondary">Steel Industry</span> Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized solutions for your steel manufacturing material requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-8">How We Can Help</h3>
              
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg p-6 mb-6 hover:border-secondary/60 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                      <p className="text-gray-400 mb-3">{method.description}</p>
                      <ul className="space-y-1">
                        {method.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <span className="text-secondary mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send Your Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-secondary focus:outline-none transition-all duration-300"
                      placeholder="Your Name"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-secondary rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-secondary focus:outline-none transition-all duration-300"
                      placeholder="Email Address"
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-secondary rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-secondary focus:outline-none transition-all duration-300"
                    placeholder="Company Name"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-secondary focus:outline-none transition-all duration-300"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Product Interest */}
                <select
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-secondary focus:outline-none transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select Product Interest</option>
                  {productOptions.map((product, index) => (
                    <option key={index} value={product} className="bg-gray-800">{product}</option>
                  ))}
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-secondary focus:outline-none transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your requirements..."
                />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FuturisticContactSection
