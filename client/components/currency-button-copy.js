import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/products'
import './css/c_button.css'

const CurrencyButtons = () => {
  const dispatch = useDispatch()
  const onClick = (e) => {
    dispatch(setCurrency(e.target.textContent))
  }
  return (
    <div className="main">
      <ul>
        <li className="root">Currency</li>
        <ul className="dropdown">
          <li>
            <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
              USD
            </button>
          </li>
          <li>
            <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
              EUR
            </button>
          </li>
          <li>
            <button type="button" className="buttonSort" onClick={(e) => onClick(e)}>
              CAD
            </button>
          </li>
        </ul>
      </ul>
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default React.memo(CurrencyButtons)
