import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)

    const { id } = useParams()

    let selectedProducts = ''

    if (productData.length > 0) {
        selectedProducts = productData.find((elem) => id == elem.id)
    }


    return (
        <div>
            <div>
                <img src={selectedProducts.image} alt="" />
                <h2>{selectedProducts.title}</h2>
                <h5>${selectedProducts.price}</h5>
            </div>
        </div>
    )
}

export default ProductDetails