import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import type { Item } from '../types'

type Props = {
  items: Item[]
  onCreateDraft: (item: Item, quantity: number) => void
  userEmail: string | null
}

export default function ItemDetailPage({ items, onCreateDraft, userEmail }: Props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = items.find((product) => product.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!userEmail) {
    return <Navigate to="/signin" replace />
  }

  if (!item) {
    return (
      <section className="page-card">
        <h1>Item not found</h1>
        <p>The item you are looking for does not exist.</p>
        <Link to="/items" className="button secondary-button">
          Back to items
        </Link>
      </section>
    )
  }

  function handlePlaceOrder() {
    if (!item) return
    onCreateDraft(item, quantity)
    navigate('/checkout')
  }

  return (
    <section className="page-card detail-card">
      <div className="detail-header">
        <div>
          <p className="eyebrow">Product details</p>
          <h1>{item.name}</h1>
        </div>
        <p className="price-large">${item.price.toFixed(2)}</p>
      </div>
      <p className="detail-description">{item.description}</p>
      <p>{item.details}</p>
      <div className="order-row">
        <label>
          Quantity
          <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <div className="button-row">
          <button type="button" className="button primary-button" onClick={handlePlaceOrder}>
            Place order
          </button>
          <Link to="/items" className="button secondary-button">
            Back to catalog
          </Link>
        </div>
      </div>
    </section>
  )
}
