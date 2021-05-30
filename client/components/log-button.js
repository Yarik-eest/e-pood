import React from 'react'

import { history } from '../redux'

const LogButton = () => {
  return (
    <button
      type="button"
      className="border p-1"
      onClick={() => history.push('/logs')}
    >
      Log
    </button>
  )
}

LogButton.propTypes = {}

export default React.memo(LogButton)
