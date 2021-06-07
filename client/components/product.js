import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket } from '../redux/reducers/basket'
import './css/product.css'

const Product = (props) => {
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)
  const dispatch = useDispatch()
  const amount = useSelector((store) => store.basket.basketProducts?.[props.good.id]?.amount)

  return (
    <div className="card">
      <img
        className="image"
        alt={props.good.title}
        src={`https://source.unsplash.com/800x600/?${/\w+(?=\s)/gi.exec(props.good.title)}`}
      />
      <div className="title">
        {(props.good.price * currentRate[currency].toFixed(2)).toFixed(2)} {currency}
      </div>

      <div className="title">{props.good.title}</div>
      <div className="title">{props.good.description}</div>

      <button
        className="buttonBuy"
        type="button"
        onClick={() => dispatch(addToBasket(props.good.id))}
      >
        Buy
      </button>
      <div className="title">Ordered: {amount} pcs.</div>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
