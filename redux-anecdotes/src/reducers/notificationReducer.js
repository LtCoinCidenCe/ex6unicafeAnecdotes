const notificationReducer = (state = 'This is the default message', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const notificationAction = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: content
  }
}

export default notificationReducer
