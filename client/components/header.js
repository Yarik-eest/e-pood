import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyButtons from './currency-buttons'
import SortingButtons from './sorting-buttons'
import BasketButton from './basket-button'
import LogButton from './log-button'

const Header = () => {
  return (
    <nav className="flex flex-col justify-center bg-blue-800 text-white h-24 w-full select-none">
      <div className="flex justify-center font-bold">
        <Link to="/">
          <div id="brand-name" className="mt-2 px-4 py-2">
            Shop
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center px-2">
        <CurrencyButtons />
        <SortingButtons />
        <BasketButton />
        <LogButton />
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
