import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Contact Info',
      content: [
        'Managing Director: Anuradha Singh',
        'Website: www.ammindia.in',
        'Email: info@ammindia.in',
      ]
    },
    {
      title: 'Business Hours',
      content: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
      ]
    }
  ]

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Steel Industry Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Steel Industry Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4 text-secondary">{section.title}</h4>
                {section.links ? (
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-300 hover:text-secondary transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-600 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-sm">
            © {currentYear} Anuradha Minerals and Metals. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
