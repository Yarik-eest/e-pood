const GET_LOGS_FROM_SERVER = 'store/basket/GET_LOGS_FROM_SERVER'

const initialState = {
  logsArray: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS_FROM_SERVER: {
      return {
        ...state,
        logsArray: action.logsArray.reverse()
      }
    }
    default:
      return state
  }
}

export function getLogsFromServer() {
  return (dispatch) => {
    fetch('/api/v1/logs')
      .then((response) => response.json())
      .then((logsArray) => {
        dispatch({ type: GET_LOGS_FROM_SERVER, logsArray })
      })
  }
}
