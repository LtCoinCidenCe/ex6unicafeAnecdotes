const timeoutReducer = (state = 0, action) =>
{
  switch (action.type)
  {
    case 'SET_TIMEOUT':
      return action.timeoutID
    default:
      return state
  }
}

export const timeoutAction = (timeoutID) =>
{
  return {
    type: 'SET_TIMEOUT',
    timeoutID: timeoutID
  }
}

export default timeoutReducer
