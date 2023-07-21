type Props = {
  isOpen: boolean
}

export default function Cart({ isOpen }: Props) {
  return (
    <div className={isOpen ? 'cart--isOpen' : 'cart'}>
      <div className="cart__header">
        <h3>Cart</h3>
      </div>
      <div className="cart__body">
        <h3>Your cart is empty.</h3>
      </div>
    </div>
  )
}
