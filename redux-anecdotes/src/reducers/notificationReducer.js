const notificationReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const notificationShow = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: content
  }
}

export const notificationHide = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    notification: ''
  }
}

export default notificationReducer
