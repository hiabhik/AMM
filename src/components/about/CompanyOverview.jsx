import AnimatedSection from '../utils/AnimatedSection'

const CompanyOverview = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AnimatedSection direction="left">
            <div className="h-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="AMM Headquarters"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h2 className="mb-6 text-primary">Our Story</h2>
              <p className="mb-4 text-lg text-gray-700">
                Anuradha Minerals and Metals (AMM) was founded with a vision to become a leading supplier of high-quality minerals and metals to industries worldwide.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Since our inception, we have grown steadily, expanding our product range and market reach while maintaining our commitment to quality and customer satisfaction.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Today, AMM is recognized as a reliable trading partner by businesses across various sectors, from manufacturing and construction to pharmaceuticals and recycling.
              </p>
              <p className="text-lg text-gray-700">
                Our success is built on strong relationships with suppliers and customers, deep industry knowledge, and a dedication to ethical business practices.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
