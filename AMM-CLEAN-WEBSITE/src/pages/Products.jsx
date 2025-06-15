import ProductsHero from '../components/products/ProductsHero'
import AdvancedProductGrid from '../components/products/AdvancedProductGrid'
import TechnicalSpecs from '../components/products/TechnicalSpecs'
import QualityStandards from '../components/products/QualityStandards'
import PageTransition from '../components/utils/PageTransition'

const Products = () => {
  return (
    <PageTransition>
      <ProductsHero />
      <AdvancedProductGrid />
      <TechnicalSpecs />
      <QualityStandards />
    </PageTransition>
  )
}

export default Products
