import { Link } from 'react-router-dom'

type Props = {
  userEmail: string | null
  onSignOut: () => void
}

export default function NavBar({ userEmail, onSignOut }: Props) {
  return (
    <header className="app-header">
      <div className="brand">
        <Link to="/">ShopFlow</Link>
      </div>
      <nav className="nav-links">
        {userEmail ? (
          <>
            <Link to="/items">Items</Link>
            <Link to="/orders">Orders</Link>
            <button type="button" className="text-button" onClick={onSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </nav>
    </header>
  )
}
