'use client'

import { useState } from 'react'
import Image from 'next/image'

import iconNext from '../../public/images/icon-next.svg'
import iconPrevious from '../../public/images/icon-previous.svg'

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const product = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ]

  function handleImageNext() {
    setCurrentImage(currentImage === 3 ? 0 : currentImage + 1)
  }

  function handleImagePrevious() {
    setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  }

  return (
    <div className="carousel container">
      <div className="carousel__image">
        <Image
          width={400}
          height={350}
          src={product[currentImage]}
          alt="Product Image"
        />
        <div className="carousel__image__navigators">
          <div className="carousel__image__navigators__buttons container">
            <button
              onClick={handleImagePrevious}
              className="button button--control"
            >
              <Image
                width={8}
                src={iconPrevious}
                alt="Previous"
                title="Previous"
              />
            </button>
            <button
              onClick={handleImageNext}
              className="button button--control"
            >
              <Image width={8} src={iconNext} alt="Next" title="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
