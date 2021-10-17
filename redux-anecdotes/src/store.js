import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import timeoutReducer from './reducers/timeoutReducer'

const reducer=combineReducers({
  notification: notificationReducer,
  anecdotes: anecdoteReducer,
  timeoutID: timeoutReducer
})

const store = createStore(reducer,composeWithDevTools())

export default store
