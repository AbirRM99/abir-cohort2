import React from 'react'
import '../nav.scss'
import { useNavigate } from 'react-router'

const Nav = () => {

    const navigate = useNavigate()
    return (
        <nav className='nav-bar'>
            <p>InstaGram</p>
            <button
                onClick={() => { navigate("/create-post") }}
                className='button button-primary'>New Post
            </button>
        </nav>
    )
}

export default Nav