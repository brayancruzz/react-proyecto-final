import Item from "../Item/item"
import { memo } from 'react'

const ItemList = ({ products }) => {
    return(
        <ul className="item-list-container">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </ul>
    )
}

export default memo(ItemList)