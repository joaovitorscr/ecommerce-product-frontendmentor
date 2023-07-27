'use client'

import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import { RootReducer } from '../store'
import { remove, clear, close } from '../store/reducers/cart'
import { priceFormatUSD } from '../utils'

import removeIcon from '../../public/images/icon-delete.svg'

export default function Cart() {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function removeItem(id: number) {
    dispatch(remove(id))
  }

  function clearCart() {
    dispatch(clear())
    dispatch(close())
  }

  function handleFinalValue() {
    let value = items.map((item) =>
      priceFormatUSD.format(+item.price * item.quantity)
    )

    return <span>{value}</span>
  }

  return (
    <div className={isOpen ? 'cart--isOpen' : 'cart'}>
      <div className="cart__header">
        <h3>Cart</h3>
      </div>
      <div className="cart__body">
        {items.length === 0 ? (
          <h3 className="cart__body__empty">Your cart is empty.</h3>
        ) : (
          items.map((item) => (
            <>
              <div className="cart__body__item">
                <Image
                  className="cart__body__item__thumbnail"
                  width={50}
                  height={50}
                  src={item.productThumbnails[0]}
                  alt="Product Thumbnail"
                />
                <div className="cart__body__item__info">
                  <h3 className="cart__body__item__info__name">{item.name}</h3>
                  <div className="cart__body__item__info__value">
                    <p className="cart__body__item__info__value__price">
                      ${item.price}
                    </p>
                    <p className="cart__body__item__info__value__quantity">
                      <span>x</span>
                      {item.quantity}
                    </p>
                    <p className="cart__body__item__info__value__finalValue">
                      {handleFinalValue()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  type="button"
                  className="cart__body__item__removeButton button"
                >
                  <Image
                    width={12}
                    height={12}
                    src={removeIcon}
                    alt="Remove Item"
                  />
                </button>
              </div>
              <button
                onClick={clearCart}
                className="cart__body__checkout"
                type="button"
              >
                Checkout
              </button>
            </>
          ))
        )}
      </div>
    </div>
  )
}
