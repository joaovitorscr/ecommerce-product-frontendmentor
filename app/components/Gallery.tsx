'use client'

import { useState } from 'react'
import Image from 'next/image'

import iconNext from '../../public/images/icon-next.svg'
import iconPrevious from '../../public/images/icon-previous.svg'

type Props = {
  productImages: string[]
  productThumbnails: string[]
}

export default function Gallery({ productImages, productThumbnails }: Props) {
  const [currentImage, setCurrentImage] = useState(0)

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
          src={productImages[currentImage]}
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
            key={index}
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
