import './App.css'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'
import { products } from './mocks/products.json'

function App () {
  const { filterProducts, filters } = useFilters()

  const filtredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filtredProducts} />

      <Footer filters={filters} />
    </CartProvider>
  )
}

export default App
