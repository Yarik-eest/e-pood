import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../redux/reducers/basket'
import './css/basket_product.css'

const BasketProduct = ({ item }) => {
  const dispatch = useDispatch()
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const product = useSelector((store) => store.basket.basketProducts?.[item.id])

  const price = (product.price * currentRate[currency].toFixed(2))

  return (
    <div className="cardBasket">
      <img
        className="image"
        src={`https://source.unsplash.com/800x600/?${/\w+(?=\s)/gi.exec(product.title)}`}
        alt={product.title}
      />
      <div className="title">{product.title}</div>
      <div className="title">
        {price.toFixed(2)} {currency}
      </div>
      <button
        className="button1"
        type="button"
        onClick={() => dispatch(removeFromBasket(item.id))}
      >
        -
      </button>
      <div className="product__amount">x {product.amount}</div>
      <button
        className="button1"
        type="button"
        onClick={() => dispatch(addToBasket(item.id))}
      >
        +
      </button>
      <div>
        {(price * product.amount).toFixed(2)} {currency}
      </div>
    </div>
  )
}

BasketProduct.propTypes = {}

export default React.memo(BasketProduct)
