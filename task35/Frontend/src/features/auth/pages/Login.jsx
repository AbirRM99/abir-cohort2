import React from 'react'

const Login = () => {
  return (
    <main>
        <div className='form-container'>
            <h1>Login</h1>
            <form>
                <input type='text' name='username' placeholder='Enter username' />
                <input type='text' name='password' placeholder='Enter password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    </main>
  )
}

export default Login