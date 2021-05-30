import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import { getLogsFromServer } from '../redux/reducers/logs'

const Logs = () => {
  const dispatch = useDispatch()
  const logsFile = useSelector((s) => s.logs.logsArray)

  useEffect(() => {
    dispatch(getLogsFromServer())
  }, [])
  return (
    <div>
      <Head title="Logs" />
      <Header />
      <div className="flex flex-col h-full">
        {logsFile.map((string, index) => {
          return (
            <div key={`log-${index}`}>
              {string}
            </div>
          )
        })}
      </div>
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
