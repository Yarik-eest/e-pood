import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket } from '../redux/reducers/basket'

const Product = (props) => {
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const dispatch = useDispatch()
  const amount = useSelector((store) => store.basket.basketProducts?.[props.good.id]?.amount)

  return (
    <div className="card bg-gray-100 text-black font-bold rounded-lg border shadow-lg p-2 m-2">
      <img className="card__image object-cover w-32 h-32" alt={props.good.title} src={props.good.image}/>
      <div className="card__price">{(props.good.price * currentRate[currency].toFixed(2)).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      <div className="card__title">{props.good.title}</div>
      <div className="card__product-amount">{amount}</div>
      <button className="border p-2"
        type="button"
        onClick={() => dispatch(addToBasket(props.good.id))}
      >
        add
      </button>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
