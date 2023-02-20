import { useCart } from '../hooks/useCart'
import('./footer.css')

export function Footer () {
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {
        /*
        <h4>Prueba técnica de React ⚛️ － <span>@dtheran1</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
        */
      }
      {JSON.stringify(cart, null, 2)}

    </footer>

  )
}
