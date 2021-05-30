import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../redux/reducers/basket'

const BasketProduct = ({ item }) => {
  const dispatch = useDispatch()
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const product = useSelector((store) => store.basket.basketProducts?.[item.id])

  const price = (product.price * currentRate[currency].toFixed(2))

  return (
    <div className="flex justify-between w-full">
      <img className="product__image h-8 w-8" src={product.image} alt={product.title} />
      <div className="product__title">{product.title}</div>
      <div className="product__price">{price.toFixed(2)} {currency}</div>
      <button
        className="product__remove p-2 border"
        type="button"
        onClick={() => dispatch(removeFromBasket(item.id))}
      >
        -
      </button>
      <div className="product__amount">x {product.amount}</div>
      <button className="p-2 border none"
        type="button"
        onClick={() => dispatch(addToBasket(item.id))}
      >
        +
      </button>
      <div>{(price * product.amount).toFixed(2)} {currency}</div>
    </div>
  )
}

BasketProduct.propTypes = {}

export default React.memo(BasketProduct)
