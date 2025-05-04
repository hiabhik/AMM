import ProductsHero from '../components/products/ProductsHero'
import ProductsList from '../components/products/ProductsList'
import CtaSection from '../components/home/CtaSection'
import PageTransition from '../components/utils/PageTransition'

const Products = () => {
  return (
    <PageTransition>
      <ProductsHero />
      <ProductsList />
      <CtaSection />
    </PageTransition>
  )
}

export default Products
