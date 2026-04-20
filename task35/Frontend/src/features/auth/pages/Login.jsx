import React, { useState } from 'react'
import "../styles/form.scss"
import "../../../shared/style.scss"
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const { user, handleLogin, loading } = useAuth()
  const navigate = useNavigate()

  if (loading) return <h1>Loading...</h1>


  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await handleLogin(username, password)
      navigate("/")
    } catch (err) {
      setError(err.response.data.message)
    }
  }


  return (
    <main>
      <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => { setUsername(e.target.value) }}
            type='text'
            name='username'
            placeholder='Enter username' />
          <input
            onInput={(e) => { setPassword(e.target.value) }}
            type='text'
            name='password'
            placeholder='Enter password' />
          {error && <p className="error">{error}</p>}
          <button className='button button-primary' type='submit'>Login</button>
        </form>

        <p>Doesn't have an account? <Link className='toggleAuthForm' to="/register">Register now</Link></p>

      </div>
    </main>
  )
}

export default Login