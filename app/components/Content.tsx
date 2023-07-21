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
    <div className="content container">
      <div className="content__info">
        <h4>{brand}</h4>
        <h3>{productName}</h3>
        <p>{description}</p>
      </div>
      <div className="content__price">
        <div>
          <p>${price}</p>
          <span className="content__price__discount">{discount}</span>
        </div>
        <p className="content__price__oldPrice">${oldPrice}</p>
      </div>
    </div>
  )
}
