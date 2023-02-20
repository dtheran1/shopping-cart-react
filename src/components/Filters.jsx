import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

import('./filters.css')

export function Filters () {
  const { filters, setFilters } = useFilters()
  // const [minPrice, setMinPrice] = useState(0) // estado local!

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (event) => {
    // setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleMinPrice} value={filters.minPrice} />
        <span> ${filters.minPrice} </span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
