// Can not find solution not to write clearTimeout in reducer
// Original steps 1 clearTimeout 2 setNotification
// 3 setNewtimeout 4 saveNewtimeoutID
const initialNotification = { text: '', timeoutID: 0 }
const notificationReducer = (state = initialNotification, action) =>
{
  switch (action.type)
  {
    case 'SET_NOTIFICATION':
      return { text: action.notification, timeoutID: state.timeoutID }
    case 'SET_TIMEOUTID':
      clearTimeout(state.timeoutID)
      return { text: state.text, timeoutID: action.timeoutID }
    default:
      return state
  }
}

export const setNotification = (content, timeoutSeconds) =>
{
  return dispatch =>
  {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification: content
    })
    const timeoutID = setTimeout(() =>
    {
      dispatch({ type: 'SET_NOTIFICATION', notification: '' })
    }, 1000 * timeoutSeconds)
    dispatch({
      type: 'SET_TIMEOUTID',
      timeoutID
    })
  }
}

export default notificationReducer
