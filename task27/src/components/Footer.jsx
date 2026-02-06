import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center absolute w-full bottom-0 justify-between p-4 bg-gray-500'>
        <h2>Footer</h2>
        <button onClick={function(){
          navigate('/course')
        }} 
        className='py-4 px-8 bg-green-300'>Explore Courses</button>
    </div>
  )
}

export default Footer