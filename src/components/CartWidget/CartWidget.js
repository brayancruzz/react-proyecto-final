import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <NavLink to='/cart'>Carrito</NavLink>
            {  totalQuantity }
        </div>
    );
}

export default CartWidget