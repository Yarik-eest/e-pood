import React from 'react'

import { history } from '../redux'
import './css/button.css'

const LogButton = () => {
  return (
    <button type="button" className="buttonSort" onClick={() => history.push('/logs')}>
      Log
    </button>
  )
}

LogButton.propTypes = {}

export default React.memo(LogButton)
