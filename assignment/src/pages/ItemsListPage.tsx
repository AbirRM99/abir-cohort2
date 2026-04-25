import type { Item } from '../types'
import { Link, Navigate } from 'react-router-dom'

type Props = {
  items: Item[]
  userEmail: string | null
}

export default function ItemsListPage({ items, userEmail }: Props) {
  if (!userEmail) {
    return <Navigate to="/signin" replace />
  }

  return (
    <section>
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Products</p>
          <h1>Browse available items</h1>
        </div>
      </div>

      <div className="item-grid">
        {items.map((item) => (
          <article key={item.id} className="item-card">
            <div className="item-avatar">{item.name.charAt(0)}</div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.shortDesc}</p>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
            <Link to={`/items/${item.id}`} className="button secondary-button">
              View details
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
