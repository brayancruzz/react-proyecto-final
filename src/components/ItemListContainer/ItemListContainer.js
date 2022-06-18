import { getProducts, getProductsByCategory } from "../../asyncmock"
import { useEffect, useState } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    // useEffect(() => {
    //     setLoading(true)

    //     getProducts().then(response => {
    //         setProducts(response)
    //     })
    // }, [])

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="main-container">
            <div className="container">
                <h1>
                    {props.greetings}
                </h1>
                {products.length > 0 
                    ? <ItemList products={products}/>
                    : <h1>No hay productos</h1>
                }
            </div>
        </div>  
    )
}

export default ItemListContainer