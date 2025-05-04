import { Link } from 'react-router-dom'
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">AMM</h3>
            <p className="mb-4">
              Anuradha Minerals and Metals - A leading trading company specializing in minerals and metals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="mailto:info@amm.com"
                className="text-white hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors duration-300">
                  Aluminium Ingots
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors duration-300">
                  Calcined Lime
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors duration-300">
                  Glycerin
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors duration-300">
                  Scrap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>123 Business Avenue, Industrial Area, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0" />
                <a href="mailto:info@amm.com" className="hover:text-accent transition-colors duration-300">
                  info@amm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p>&copy; {currentYear} Anuradha Minerals and Metals. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
