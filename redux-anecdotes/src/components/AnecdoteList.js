import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { voteAction } from "../reducers/anecdoteReducer"

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
  const anecdotes = useSelector(state => state.anecdotes.slice().sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => dispatch(voteAction(id))

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
