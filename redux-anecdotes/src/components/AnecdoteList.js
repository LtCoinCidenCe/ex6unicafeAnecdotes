import React from "react"
import { connect } from "react-redux"
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

const AnecdoteList = (props) =>
{
  console.log('AnecdoteListComponent')

  const vote = (anecdote) =>
  {
    props.voteAction(anecdote)

    // set Notification
    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return (
    <div className="AList">
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => { vote(anecdote) }} />)}
    </div>)
}


const mapStateToProps = (state) =>
{
  const filter = state.filter
  const anecdotes = state.anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)
  return { anecdotes }
}
const mapDispatchToProps = { setNotification, voteAction }

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
