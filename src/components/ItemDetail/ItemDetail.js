const ItemDetail = ({ name, img, price, Description }) => {
    return (
        <>
            <div className="product-detail-container">
                <img src={img} alt={name} className="img-product-detail"/>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <h5>{Description}</h5>
                <button>Comprar</button>
            </div>
        </>
    )
}

export default ItemDetail