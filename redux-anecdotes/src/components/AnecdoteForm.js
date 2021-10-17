import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createAction } from "../reducers/anecdoteReducer"
import { notificationHide, notificationShow } from "../reducers/notificationReducer"
import { timeoutAction } from "../reducers/timeoutReducer"

const AnecdoteForm = () =>
{
  const dispatch = useDispatch()
  const timeoutID = useSelector(state => state.timeoutID)

  const createNew = (event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAction(content))
    
    // set Notification
    clearTimeout(timeoutID)
    dispatch(notificationShow(`'${content}' created`))
    dispatch(timeoutAction(setTimeout(() => { dispatch(notificationHide()) }, 5000)))
  }

  return <div className="newForm">
    <h2>create new</h2>
    <form onSubmit={createNew}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  </div>
}

export default AnecdoteForm
