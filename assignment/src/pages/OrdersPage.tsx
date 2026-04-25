import type { Order } from '../types'
import { Link, Navigate } from 'react-router-dom'

type Props = {
  orders: Order[]
  userEmail: string | null
}

export default function OrdersPage({ orders, userEmail }: Props) {
  if (!userEmail) {
    return <Navigate to="/signin" replace />
  }

  return (
    <section>
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">My orders</p>
          <h1>Order history</h1>
        </div>
        <Link to="/items" className="button secondary-button">
          Continue shopping
        </Link>
      </div>
      {orders.length === 0 ? (
        <div className="page-card empty-card">
          <h2>No orders yet</h2>
          <p>Create your first order from the items page.</p>
        </div>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <article key={order.orderId} className="order-card">
              <div className="order-header">
                <div>
                  <h2>{order.item.name}</h2>
                  <p className="muted">{order.orderId}</p>
                </div>
                <span className={`status-pill ${order.status === 'Paid' ? 'status-success' : 'status-failed'}`}>
                  {order.status}
                </span>
              </div>
              <div className="summary-row">
                <span>Quantity</span>
                <strong>{order.quantity}</strong>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <strong>{order.shippingAddress}</strong>
              </div>
              <div className="summary-row">
                <span>Payment</span>
                <strong>{order.paymentMethod}</strong>
              </div>
              <div className="summary-row">
                <span>Total</span>
                <strong>${order.total.toFixed(2)}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
