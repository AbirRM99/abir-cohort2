import axios from "axios"

export const getAllProductData = async ()=> {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
}
export const getSelectedData = async (id)=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
}