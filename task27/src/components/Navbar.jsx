import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-8 py-8 bg-pink-700 mb-10'>
            <h2 className='text-3xl font-semibold'>Navbar</h2>
            <div className='flex gap-8'>
                <NavLink className='text-2xl font-semibold' to='/'
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : 'white'
                    })}>Home</NavLink>
                <NavLink className='text-2xl font-semibold' to='/about' style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}>About</NavLink>
                <NavLink className='text-2xl font-semibold' to='/product' style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}>Products</NavLink>
                <NavLink className='text-2xl font-semibold' to='/course' style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}>Courses</NavLink>
            </div>
        </div>
    )
}

export default Navbar