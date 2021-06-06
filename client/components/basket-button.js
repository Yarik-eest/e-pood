import React from 'react'
import { useSelector } from 'react-redux'
import { history } from '../redux'
import './css/button.css'

const BasketButton = () => {
  const totalAmount = useSelector((s) => s.basket.totalAmount)
  const totalPrice = useSelector((s) => s.basket.totalPrice)
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)

  return (
    <div className="main">
      <div className="flex flex-col items-center px-2 text-sm">
        <div className="flex-1 font-semibold">{totalAmount} pcs.</div>
        <div className="flex-1">
          {(totalPrice * currentRate[currency].toFixed(2)).toFixed(2)} {currency}
        </div>
      </div>
      <button
        type="button"
        id="order-count"
        className="buttonBusket"
        onClick={() => history.push('/basket')}
      >
        Basket
      </button>
    </div>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)


