import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import type { OrderDraft } from '../types'

type Props = {
  draftOrder: OrderDraft | null
  onUpdateDraft: (draft: OrderDraft) => void
  userEmail: string | null
}

export default function CheckoutPage({ draftOrder, onUpdateDraft, userEmail }: Props) {
  const navigate = useNavigate()
  const [address, setAddress] = useState(draftOrder?.shippingAddress || '')
  const [error, setError] = useState('')

  if (!userEmail) {
    return <Navigate to="/signin" replace />
  }

  if (!draftOrder) {
    return <Navigate to="/items" replace />
  }

  const currentDraft = draftOrder

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!address.trim()) {
      setError('Please enter a shipping address.')
      return
    }
    setError('')
    onUpdateDraft({
      item: currentDraft.item,
      quantity: currentDraft.quantity,
      paymentMethod: currentDraft.paymentMethod,
      total: currentDraft.total,
      shippingAddress: address,
    })
    navigate('/payment')
  }

  return (
    <section className="page-card">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Order review</p>
          <h1>Confirm shipping details</h1>
        </div>
      </div>
      <article className="summary-card">
        <h2>{draftOrder.item.name}</h2>
        <p>{draftOrder.item.shortDesc}</p>
        <div className="summary-row">
          <span>Quantity</span>
          <strong>{draftOrder.quantity}</strong>
        </div>
        <div className="summary-row">
          <span>Order total</span>
          <strong>${draftOrder.total.toFixed(2)}</strong>
        </div>
      </article>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label>
          Shipping address
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            rows={4}
            placeholder="123 Main Street, City, Country"
          />
        </label>
        {error && <p className="error-text">{error}</p>}
        <div className="button-row">
          <button type="submit" className="button primary-button">
            Proceed to payment
          </button>
          <Link to="/items" className="button secondary-button">
            Back to items
          </Link>
        </div>
      </form>
    </section>
  )
}
