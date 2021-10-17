import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { voteAction } from "../reducers/anecdoteReducer"
import { notificationHide, notificationShow } from "../reducers/notificationReducer"
import { timeoutAction } from "../reducers/timeoutReducer"

const Anecdote = ({ anecdote, handleClick }) =>
{
  return (
    <div className="Anecdote">
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>)
}

const AnecdoteList = () =>
{
  console.log('AnecdoteListComponent')
  const anecdotes = useSelector(state => state.anecdotes.slice().sort((a, b) => b.votes - a.votes))
  const timeoutID = useSelector(state => state.timeoutID)
  const dispatch = useDispatch()

  const vote = (id) =>
  {
    dispatch(voteAction(id))
    
    // set Notification
    clearTimeout(timeoutID)
    dispatch(notificationShow(`you voted '${anecdotes.find(element => element.id === id).content}'`))
    dispatch(timeoutAction(setTimeout(() => { dispatch(notificationHide()) }, 5000)))
  }

  return (
    <div className="AList">
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => { vote(anecdote.id) }} />)}
    </div>)
}

export default AnecdoteList
