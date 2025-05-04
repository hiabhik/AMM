import { useState } from 'react'
import ProductCard from './ProductCard'
import AnimatedSection from '../utils/AnimatedSection'

const productsData = [
  {
    id: 'aluminium-ingots',
    name: 'Aluminium Ingots',
    shortDescription: 'High-quality aluminium ingots for various industrial applications.',
    image: 'https://images.unsplash.com/photo-1605557202138-077402cf31e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    specifications: [
      'Purity: 99.7% minimum',
      'Weight: 20kg per ingot',
      'Dimensions: 600mm x 120mm x 80mm',
      'Packaging: Palletized with secure strapping'
    ],
    applications: [
      'Automotive components',
      'Construction materials',
      'Electrical conductors',
      'Packaging materials',
      'Consumer goods manufacturing'
    ],
    category: 'metals'
  },
  {
    id: 'calcined-lime',
    name: 'Calcined Lime',
    shortDescription: 'Premium calcined lime for construction and industrial uses.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    specifications: [
      'CaO content: 90% minimum',
      'MgO content: 5% maximum',
      'Reactivity: High',
      'Packaging: 25kg bags or bulk'
    ],
    applications: [
      'Construction (mortar and plaster)',
      'Water treatment',
      'Soil stabilization',
      'Metallurgical processes',
      'Chemical manufacturing'
    ],
    category: 'minerals'
  },
  {
    id: 'glycerin',
    name: 'Glycerin',
    shortDescription: 'Pure glycerin for pharmaceutical and personal care products.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    specifications: [
      'Purity: 99.5% minimum',
      'Specific gravity: 1.26',
      'pH: 6.5-7.5',
      'Packaging: 200L drums or 1000L IBC'
    ],
    applications: [
      'Pharmaceuticals',
      'Cosmetics and personal care',
      'Food and beverages',
      'Textiles',
      'Antifreeze formulations'
    ],
    category: 'chemicals'
  },
  {
    id: 'scrap',
    name: 'Scrap',
    shortDescription: 'Recycled metal scrap for sustainable manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    specifications: [
      'Types: HMS 1&2, Used Rails, Copper Scrap, Aluminum Scrap',
      'Quality: Sorted and graded',
      'Contaminants: Minimal',
      'Packaging: Baled or loose in containers'
    ],
    applications: [
      'Steel production',
      'Foundries',
      'Metal recycling facilities',
      'Manufacturing of recycled metal products',
      'Construction materials'
    ],
    category: 'recycled'
  }
]

const ProductsList = () => {
  const [filter, setFilter] = useState('all')
  
  const filteredProducts = filter === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === filter)

  return (
    <section className="section">
      <div className="container">
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('metals')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'metals'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Metals
            </button>
            <button
              onClick={() => setFilter('minerals')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'minerals'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Minerals
            </button>
            <button
              onClick={() => setFilter('chemicals')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'chemicals'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Chemicals
            </button>
            <button
              onClick={() => setFilter('recycled')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'recycled'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Recycled
            </button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProducts.map((product, index) => (
            <AnimatedSection key={product.id} delay={0.1 * index}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsList
