type Props = {
  brand: string
  productName: string
  description: string
  price: string
  discount: string
  oldPrice: string
}

export default function Content({
  brand,
  description,
  discount,
  oldPrice,
  price,
  productName
}: Props) {
  return (
    <div className="content">
      <div className="content__info">
        <h4>{brand}</h4>
        <h3>{productName}</h3>
        <p>{description}</p>
      </div>
      <div className="content__price">
        <div className="content__price__container">
          <div className="content__price__container__currentPriceAndDiscount">
            <p>${price}</p>
            <span className="content__price__container__currentPriceAndDiscount__discount">
              {discount}
            </span>
          </div>
          <p className="content__price__container__oldPrice">${oldPrice}</p>
        </div>
      </div>
    </div>
  )
}
