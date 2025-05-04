import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/utils/PageTransition'

const NotFound = () => {
  return (
    <PageTransition>
      <section className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-6xl font-bold text-primary"
            >
              404
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-semibold text-gray-800"
            >
              Page Not Found
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-gray-600"
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFound
