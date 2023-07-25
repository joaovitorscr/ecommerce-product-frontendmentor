'use client'

import { useState } from 'react'
import Image from 'next/image'

import Carousel from './Gallery'
import Content from './Content'

import iconMinus from '../../public/images/icon-minus.svg'
import iconPlus from '../../public/images/icon-plus.svg'

export type Product = {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Product() {
  const [productQuantity, setProductQuantity] = useState(0)

  function handlePlus() {
    setProductQuantity(productQuantity + 1)
  }

  function handleMinus() {
    setProductQuantity(
      productQuantity === 0 ? productQuantity : productQuantity - 1
    )
  }

  return (
    <main className="product container">
      <Carousel />
      <div className="content__container">
        <Content
          brand="sneaker company"
          productName="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer."
          price="125.00"
          oldPrice="250.00"
          discount="50%"
        />
        <div className="product__actions">
          <div className="product__actions__quantity">
            <button type="button" onClick={handleMinus}>
              <Image src={iconMinus} alt="Minus" />
            </button>
            <span>{productQuantity}</span>
            <button type="button" onClick={handlePlus}>
              <Image src={iconPlus} alt="Plus" />
            </button>
          </div>
          <button className="product__actions__addToCart">
            <div>
              <svg width={22} height={20} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>
              Add to cart
            </div>
          </button>
        </div>
      </div>
    </main>
  )
}
