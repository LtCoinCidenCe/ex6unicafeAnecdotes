import React from "react"
import { useDispatch } from 'react-redux'
import { createAction } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const createNew = (event) => {
    event.preventDefault()
    const content=event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAction(content))
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
