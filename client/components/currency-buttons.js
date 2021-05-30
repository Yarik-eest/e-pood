import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrency } from '../redux/reducers/products'

const CurrencyButtons = () => {
  const dispatch = useDispatch()
  const onClick = (e) => {
    dispatch(setCurrency(e.target.textContent))
  }
  return (
    <div>
      <button type="button" className="border p-1" onClick={(e) => onClick(e)}>USD</button>
      <button type="button" className="border p-1" onClick={(e) => onClick(e)}>EUR</button>
      <button type="button" className="border p-1" onClick={(e) => onClick(e)}>CAD</button>
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default React.memo(CurrencyButtons)


