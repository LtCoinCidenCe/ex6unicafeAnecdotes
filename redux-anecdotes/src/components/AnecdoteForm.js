import React from "react"
import { useDispatch } from 'react-redux'
import { createAction } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () =>
{
  const dispatch = useDispatch()

  const createNew = async (event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAction(content))

    // set Notification
    dispatch(setNotification(`'${content}' created`, 5))
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
