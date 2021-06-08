import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/products'
import './css/button.css'

const CurrencyButtons = () => {
  const dispatch = useDispatch()
  const onClick = (e) => {
    dispatch(setCurrency(e.target.textContent))
  }
  return (
    <div className="main">
      <div>
        <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
          USD
        </button>
        <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
          EUR
        </button>
        <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
          CAD
        </button>
      </div>
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default React.memo(CurrencyButtons)
