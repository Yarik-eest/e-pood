import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '../redux/reducers/products'
import './css/c_button.css'

const CurrencyButtons = () => {
  const dispatch = useDispatch()
  const onClick = (e) => {
    dispatch(setCurrency(e.target.textContent))
    }
    const currency = useSelector((s) => s.products.currency)
  return (
    <div>
      <ul>
        <li className="root">
          {currency}
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
        </li>
      </ul>
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default React.memo(CurrencyButtons)
