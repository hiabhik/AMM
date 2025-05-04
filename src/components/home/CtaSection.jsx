import { Link } from 'react-router-dom'
import AnimatedSection from '../utils/AnimatedSection'

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Partner with AMM?</h2>
          <p className="mb-8 text-xl text-gray-100">
            Contact us today to discuss your requirements and discover how our high-quality products can benefit your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Products
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default CtaSection
