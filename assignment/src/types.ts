export type Item = {
  id: string
  name: string
  shortDesc: string
  description: string
  price: number
  details: string
}

export type OrderDraft = {
  item: Item
  quantity: number
  shippingAddress: string
  paymentMethod: string
  total: number
}

export type OrderStatus = 'Paid' | 'Failed'

export type Order = {
  orderId: string
  item: Item
  quantity: number
  shippingAddress: string
  paymentMethod: string
  total: number
  status: OrderStatus
  createdAt: string
}
