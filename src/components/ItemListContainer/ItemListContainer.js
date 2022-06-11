import { getProducts } from "../../asyncmock"
import { useEffect, useState } from "react"
import ItemList from "../itemList/itemList"

const ItemListContainer = (props) => {
   
    const [input, setInput] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    //ESTA FUNCIÓN EN EL FUTURO SERÁ PARA EL SEARCH BAR

    // const handleSubmit = (e) =>{
    //     e.preventDefault()

    //     getProducts().then(response => {
    //         setProducts(response)
    //     })
    // }

    return (
        <div className="main-container">
            {/* <form onSubmit={handleSubmit}>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form> */}
            <div className="container">
                <h1>
                    {props.greetings}
                </h1>
                <ItemList products={products}/>
            </div>
        </div>  
    )
}

export default ItemListContainer