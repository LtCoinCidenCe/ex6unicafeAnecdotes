// If a second action is created before the timeout of the first action
// The notification would be closed by the first timeout action
// To solve the that original solution was to add another reducer just to keep timeout ID
// But useSelector can only be used in components
// So can not use the short dispatch syntax for this
const notificationReducer = (state = '', action) =>
{
  switch (action.type)
  {
    case 'SET_NOTIFICATION':
      return action.notification
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
    setTimeout(() =>
    {
      dispatch({ type: 'SET_NOTIFICATION', notification: '' })
    }, 1000 * timeoutSeconds)
  }
}

export default notificationReducer
