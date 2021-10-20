import React from "react"
import { connect } from 'react-redux'
import { createAction } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) =>
{
  const createNew = async (event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAction(content)

    // set Notification
    props.setNotification(`'${content}' created`, 5)
  }

  return <div className="newForm">
    <h2>create new</h2>
    <form onSubmit={createNew}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  </div>
}


const mapDispatchToProps = {
  createAction,
  setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
