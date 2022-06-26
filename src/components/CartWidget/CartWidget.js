import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            <NavLink to='/cart'>Carrito</NavLink>
            {  totalQuantity }
        </div>
    );
}

export default CartWidget