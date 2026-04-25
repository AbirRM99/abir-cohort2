import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import type { OrderDraft } from '../types'

type Props = {
  draftOrder: OrderDraft | null
  onComplete: (successful: boolean, paymentMethod: string) => void
  userEmail: string | null
}

export default function PaymentPage({ draftOrder, onComplete, userEmail }: Props) {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState(draftOrder?.paymentMethod || 'Credit card')

  if (!userEmail) {
    return <Navigate to="/signin" replace />
  }

  if (!draftOrder) {
    return <Navigate to="/items" replace />
  }

  function handlePayment(successful: boolean) {
    onComplete(successful, paymentMethod)
    navigate(`/payment/result/${successful ? 'success' : 'failed'}`)
  }

  return (
    <section className="page-card">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Payment</p>
          <h1>Complete your purchase</h1>
        </div>
      </div>
      <article className="summary-card">
        <h2>{draftOrder.item.name}</h2>
        <div className="summary-row">
          <span>Quantity</span>
          <strong>{draftOrder.quantity}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>{draftOrder.shippingAddress}</strong>
        </div>
        <div className="summary-row">
          <span>Total</span>
          <strong>${draftOrder.total.toFixed(2)}</strong>
        </div>
      </article>
      <form className="form-stack" onSubmit={(event) => event.preventDefault()}>
        <label>
          Payment method
          <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
            <option>Credit card</option>
            <option>Debit card</option>
            <option>PayPal</option>
          </select>
        </label>
        <div className="button-row">
          <button type="button" className="button primary-button" onClick={() => handlePayment(true)}>
            Pay ${draftOrder.total.toFixed(2)}
          </button>
          <button type="button" className="button secondary-button" onClick={() => handlePayment(false)}>
            Simulate failure
          </button>
        </div>
      </form>
    </section>
  )
}
