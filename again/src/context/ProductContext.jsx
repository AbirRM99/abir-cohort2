import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../api/ProductApi'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

    const setData = async ()=>{
        setProductData(await getData())
    }
    useEffect(function () {
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext.Provider value={productData}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext