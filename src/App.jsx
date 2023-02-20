import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilters } from './hooks/useFilters'
import { products } from './mocks/products.json'

function App () {
  const { filterProducts, filters } = useFilters()

  const filtredProducts = filterProducts(products)

  return (
    <div>
      <Header />
      <Products products={filtredProducts} />

      <Footer filters={filters} />
    </div>
  )
}

export default App
