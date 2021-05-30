import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { sortProducts } from '../redux/reducers/products'

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
    <div>
      <button
        type="button"
        id="sort-price"
        className="border p-1"
        onClick={() => sortIt('price')}
      >
        Sort by price
      </button>
      <button
        type="button"
        id="sort-name"
        className="border p-1"
        onClick={() => sortIt('title')}
      >
        Sort by name
      </button>
    </div>
  )
}

SortingButtons.propTypes = {}

export default React.memo(SortingButtons)
