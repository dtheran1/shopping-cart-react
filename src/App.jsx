import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { products } from './mocks/products.json'

function App () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filtredProducts = filterProducts(products)

  return (
    <div className='App'>
      <Header  />
      <Products products={filtredProducts} />
    </div>
  )
}

export default App
