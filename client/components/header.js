import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyButtons from './currency-buttons'
import SortingButtons from './sorting-buttons'
import BasketButton from './basket-button'
import LogButton from './log-button'
import './css/navbar.css'

const Header = () => {
  return (
    <div className="main">
      <div className="leftSide">
        <div className="links">
          <Link to="/" id="brand-name" className="blueButton">
            Shop
          </Link>
          <Link to="/about" id="brand-name" className="blueButton">
            About
          </Link>
        </div>
      </div>

      <div className="rightSide">
        <CurrencyButtons />
        <SortingButtons />
        <BasketButton />
        <LogButton />
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
 //   <div className="flex justify-center font-bold"> </div>