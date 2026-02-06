import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')
  return (
    <div>
        
        <h1>The Theme is {props.theme}</h1>
        <form onSubmit={function(e){
            e.preventDefault()
            props.changeTheme(newTheme)

            console.log(newTheme);
            setNewTheme('')
            setNewTheme(newTheme)
            
        }}>
            <input value={newTheme}
            onChange={function(e){
                setNewTheme(e.target.value)
            }}
            type="text" placeholder='Enter theme'/>
            <button
            >Submit</button>
        </form>
    </div>
  )
}

export default Navbar