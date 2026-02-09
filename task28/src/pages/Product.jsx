import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {

    const productData = useContext(ProductDataContext)

    let renderData = 'Loading...'
    if (productData.length > 0) {
        renderData = productData.map(function (elem, idx) {
            return <div>
                <Link className='product' key={idx} to={`/products/${elem.id}`}>
                    <div>
                        <img src={elem.image} alt="" />
                        <h2>{elem.title}</h2>
                    </div>
                </Link>
            </div>
        })
    }

    return (
        <div className='allProducts'>
            {renderData}
        </div>
    )
}

export default Product