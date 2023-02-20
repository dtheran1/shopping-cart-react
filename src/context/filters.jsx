import { createContext, useState } from 'react'

// Es como un componente que envuelve la app(si lo necesita) con un stado que sera proveido desde este contexto
// 1.Crear el context
export const FiltersContext = createContext()

// 2. Aqui le proveemos el contexto a los hijos de este componente
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
