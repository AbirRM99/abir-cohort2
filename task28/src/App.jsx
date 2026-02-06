import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')

  function changeTheme(newTheme){
    setTheme(newTheme)
  }
  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme}/>
    </div>
  )
}

export default App