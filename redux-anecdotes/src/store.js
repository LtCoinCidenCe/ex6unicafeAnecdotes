import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import timeoutReducer from './reducers/timeoutReducer'

const reducer=combineReducers({
  notification: notificationReducer,
  anecdotes: anecdoteReducer,
  timeoutID: timeoutReducer,
  filter: filterReducer
})

const store = createStore(reducer,composeWithDevTools())

export default store
