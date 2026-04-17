import React, { useState } from 'react'
import "../styles/form.scss"
import "../../../shared/style.scss"
import { Link, useNavigate } from 'react-router'
import axios from "axios"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user, loading, handleRegister } = useAuth()
  const navigate = useNavigate()

  if (loading) {
    return (<main><h1>Loading...</h1></main>)
  }


  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister(username, email, password)
      .then(res => {
        // console.log(res)
        navigate("/")
      })
  }

  return (
    <main>
      <div className='form-container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => { setUsername(e.target.value) }}
            type='text'
            name='username'
            placeholder='Enter username' />
          <input
            onInput={(e) => { setEmail(e.target.value) }}
            type='text'
            name='email'
            placeholder='Enter email' />
          <input
            onInput={(e) => { setPassword(e.target.value) }}
            type='text'
            name='password'
            placeholder='Enter password' />
          <button className='button button-primary' type='submit'>Register</button>
        </form>

        <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register 