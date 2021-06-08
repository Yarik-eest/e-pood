import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyButtons from './currency-button'
import SortingButtons from './sorting-buttons'
import BasketButton from './basket-button'
import LogButton from './log-button'
import './css/navbar.css'


const Header = () => {
  const [ showLinks, setShowLinks] = useState(false)
  return (
    <div className="main">
      <div className="leftSide">
        <div className="links" id={showLinks ? 'hidden' : ''}>
          <Link to="/" id="brand-name" className="blueButton">
            Shop
          </Link>
          <Link to="/contact" id="brand-name" className="blueButton">
            Contact
          </Link>
          <Link to="/feedback" id="brand-name" className="blueButton">
            Feedback
          </Link>
          <Link to="/about" id="brand-name" className="blueButton">
            About
          </Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)} type="button" id="menu">
          menu
        </button>
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