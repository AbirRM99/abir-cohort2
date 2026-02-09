import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
  return (
    <div className='home'>
        <h1>Home page</h1>
        <button className='cta' onClick={()=>{
            navigate('/products')
        }}>Explore Products</button>
    </div>
  )
}

export default Home