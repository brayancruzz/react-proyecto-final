import { getProducts, getProductsByCategory } from "../../asyncmock"
import { useEffect, useState } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Bienvenidos')
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? ( 
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Estos son nuestro productos')
        }, 3000)
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="main-container">
            <h1>{title}</h1>
            <div className="container">
                {products.length > 0 
                    ? <ItemList products={products}/>
                    : <h1>No hay productos</h1>
                }
            </div>
        </div>  
    )
}

export default ItemListContainer