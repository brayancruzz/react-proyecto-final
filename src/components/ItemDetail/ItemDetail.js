import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, stock, name, img, price, Description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }
    
    return (
        <>
            <div className="product-detail-container">
                <img src={img} alt={name} className="img-product-detail"/>
                <h3>{name}</h3>
                <h4>
                    Precio: ${price}
                </h4>
                <h5>{Description}</h5>
            </div>
            <div className='ItemFooter'>
                { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart'>Terminar compra</Link>
                }
            </div>
        </>
    )
}

export default ItemDetail