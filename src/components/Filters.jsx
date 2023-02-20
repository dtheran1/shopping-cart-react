import { useState } from 'react'

import('./filters.css')

export function Filters () {
  const [minPrice, setMinPrice] = useState(0)

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio a partir de:</label>
        <input type='range' id='price' min='0' max='1000' onChange={handleMinPrice} />
        <span> ${minPrice} </span>
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id='category'>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
