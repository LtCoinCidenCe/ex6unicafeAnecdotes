import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { voteAction } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

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
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => b.votes - a.votes))

  const dispatch = useDispatch()

  const vote = (anecdote) =>
  {
    dispatch(voteAction(anecdote))

    // set Notification
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div className="AList">
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => { vote(anecdote) }} />)}
    </div>)
}

export default AnecdoteList
