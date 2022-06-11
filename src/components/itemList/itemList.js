import Item from "../Item/item"

const ItemList = ({ products }) => {
    return(
        <ul className="item-list-container">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </ul>
    )
}

export default ItemList