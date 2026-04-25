import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  userEmail: string | null
  onSignIn: (email: string) => void
}

export default function SignInPage({ userEmail, onSignIn }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (userEmail) {
    return <Navigate to="/items" replace />
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    setError('')
    onSignIn(email)
  }

  return (
    <section className="page-card auth-card">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in to continue</h1>
        <p className="page-intro">
          Use any email to sign in and explore the shopping flow.
        </p>
      </div>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="button primary-button">
          Sign in
        </button>
      </form>
    </section>
  )
}
