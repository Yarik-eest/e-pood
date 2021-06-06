import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { sortProducts } from '../redux/reducers/products'
import './css/button.css'

const SortingButtons = () => {
  const dispatch = useDispatch()
  const [dir, setDir] = useState({
    'price': true,
    'title': true
  })

  const sortIt = (type) => {
    dispatch(sortProducts(type, dir[type] ? 'a-z' : 'z-a'))
    setDir({
      ...dir,
      [type]: !dir[type]
    })
  }

  return (
    <div className="main">
      <button
        type="button"
        id="sort-price"
        className="buttonSortProduct"
        onClick={() => sortIt('price')}
      >
        Sort by price
      </button>
      <button
        type="button"
        id="sort-name"
        className="buttonSortProduct"
        onClick={() => sortIt('title')}
      >
        Sort by name
      </button>
    </div>
  )
}

SortingButtons.propTypes = {}

export default React.memo(SortingButtons)
