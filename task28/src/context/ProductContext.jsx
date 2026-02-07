import { createContext, useEffect, useState } from 'react'
import { getAllProductData} from '../api/Product.js'

export const ProductDataContext = createContext()

const ProductContext = (props) => {
    const [productData, setProductData] = useState([])

    const setData = async () => {

        
        setProductData(await getAllProductData())
    }

    useEffect(function () {
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext value={productData}>
                {props.children}
            </ProductDataContext>
        </div>
    )
}

export default ProductContext