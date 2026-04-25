import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { items } from './data'
import type { Item, Order, OrderDraft } from './types'
import NavBar from './components/NavBar'
import SignInPage from './pages/SignInPage'
import ItemsListPage from './pages/ItemsListPage'
import ItemDetailPage from './pages/ItemDetailPage'
import CheckoutPage from './pages/CheckoutPage'
import PaymentPage from './pages/PaymentPage'
import PaymentResultPage from './pages/PaymentResultPage'
import OrdersPage from './pages/OrdersPage'

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [draftOrder, setDraftOrder] = useState<OrderDraft | null>(null)
  const [orders, setOrders] = useState<Order[]>([])

  function handleSignIn(email: string) {
    setUserEmail(email)
  }

  function handleSignOut() {
    setUserEmail(null)
    setDraftOrder(null)
  }

  function handleCreateDraft(item: Item, quantity: number) {
    setDraftOrder({
      item,
      quantity,
      shippingAddress: '',
      paymentMethod: 'Credit card',
      total: item.price * quantity,
    })
  }

  function handleUpdateDraft(updatedDraft: OrderDraft) {
    setDraftOrder(updatedDraft)
  }

  function handleCompletePayment(successful: boolean, paymentMethod: string) {
    if (!draftOrder) {
      return
    }

    const newOrder: Order = {
      orderId: `ORD-${Date.now()}`,
      item: draftOrder.item,
      quantity: draftOrder.quantity,
      shippingAddress: draftOrder.shippingAddress,
      paymentMethod,
      total: draftOrder.total,
      status: successful ? 'Paid' : 'Failed',
      createdAt: new Date().toLocaleString(),
    }

    setOrders((current) => [newOrder, ...current])
    setDraftOrder({ ...draftOrder, paymentMethod })
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar userEmail={userEmail} onSignOut={handleSignOut} />
        <main className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                userEmail ? <Navigate to="/items" replace /> : <Navigate to="/signin" replace />
              }
            />
            <Route path="/signin" element={<SignInPage userEmail={userEmail} onSignIn={handleSignIn} />} />
            <Route path="/items" element={<ItemsListPage items={items} userEmail={userEmail} />} />
            <Route
              path="/items/:id"
              element={
                <ItemDetailPage
                  items={items}
                  onCreateDraft={handleCreateDraft}
                  userEmail={userEmail}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  draftOrder={draftOrder}
                  onUpdateDraft={handleUpdateDraft}
                  userEmail={userEmail}
                />
              }
            />
            <Route
              path="/payment"
              element={
                <PaymentPage draftOrder={draftOrder} onComplete={handleCompletePayment} userEmail={userEmail} />
              }
            />
            <Route path="/payment/result/:status" element={<PaymentResultPage userEmail={userEmail} />} />
            <Route path="/orders" element={<OrdersPage orders={orders} userEmail={userEmail} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
