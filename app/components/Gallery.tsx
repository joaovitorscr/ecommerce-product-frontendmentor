'use client'

import { useState } from 'react'
import Image from 'next/image'

import iconNext from '../../public/images/icon-next.svg'
import iconPrevious from '../../public/images/icon-previous.svg'

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const product = [
    '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg'
  ]

  const productThumbnails = [
    '/images/image-product-1-thumbnail.jpg',
    '/images/image-product-2-thumbnail.jpg',
    '/images/image-product-3-thumbnail.jpg',
    '/images/image-product-4-thumbnail.jpg'
  ]

  function handleImageNext() {
    setCurrentImage(currentImage === 3 ? 0 : currentImage + 1)
  }

  function handleImagePrevious() {
    setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
  }

  return (
    <div className="gallery">
      <div className="gallery__image">
        <Image
          width={400}
          height={350}
          src={product[currentImage]}
          alt="Product Image"
        />
        <div className="gallery__image__navigators">
          <div className="gallery__image__navigators__buttons container">
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
      <div className="gallery__thumbnails">
        {productThumbnails.map((item, index) => (
          <div
            className={
              currentImage === index
                ? 'gallery__thumbnails__item--isActive'
                : 'gallery__thumbnails__item'
            }
            onClick={() => setCurrentImage(index)}
          >
            <Image
              className="gallery__thumbnails__item__image"
              width={100}
              height={100}
              src={item}
              alt={`Thumb ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
