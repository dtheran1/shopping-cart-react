// import { useFilters } from '../App'

import('./footer.css')

export function Footer ({ filters }) {
  // const { filters } = useFilters()
  return (
    <footer className='footer'>
      {
        /*
        <h4>Prueba técnica de React ⚛️ － <span>@dtheran1</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
        */
      }
      {JSON.stringify(filters, null, 2)}

    </footer>

  )
}
