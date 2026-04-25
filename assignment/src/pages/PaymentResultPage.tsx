import { Link, useParams } from 'react-router-dom'

type Props = {
  userEmail: string | null
}

export default function PaymentResultPage({ userEmail }: Props) {
  const { status } = useParams()
  const success = status === 'success'

  return (
    <section className="page-card result-card">
      <div>
        <p className="eyebrow">Payment {success ? 'successful' : 'failed'}</p>
        <h1>{success ? 'Thank you for your order.' : 'Something went wrong.'}</h1>
        <p>
          {success
            ? 'Your payment was processed. You can view your order on the orders page.'
            : 'The payment did not complete. You can try again or return to the items list.'}
        </p>
      </div>
      <div className="button-row">
        {success ? (
          <Link to="/orders" className="button primary-button">
            View orders
          </Link>
        ) : (
          <Link to="/payment" className="button primary-button">
            Try payment again
          </Link>
        )}
        <Link to={userEmail ? '/items' : '/signin'} className="button secondary-button">
          {userEmail ? 'Back to shop' : 'Return to sign in'}
        </Link>
      </div>
    </section>
  )
}
