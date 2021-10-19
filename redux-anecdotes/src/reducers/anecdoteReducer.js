// const getId = () => (100000 * Math.random()).toFixed(0)

import anecdoteService from "../services/anecdotes"

// const asObject = (anecdote) =>
// {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const anecdoteReducer = (state = [], action) =>
{
  // console.log('state now: ', state)
  // console.log('action', action)
  switch (action.type)
  {
    case 'VOTE':
      const id = action.data.id
      // const anecdote = state.find(n => n.id === id)
      const changed = action.data
      return state.map(anecdote => anecdote.id !== id ? anecdote : changed)
    case 'NEW':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const voteAction = (anecdote) =>
{
  return async dispatch =>
  {
    const changed = { ...anecdote, votes: anecdote.votes + 1 }
    const updated = await anecdoteService.updateOne(changed.id, changed)
    console.log(updated)
    dispatch({
      type: 'VOTE',
      data: updated
    })
  }
}

export const createAction = (anecdote) =>
{
  return async dispatch =>
  {
    const newA = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'NEW',
      data: newA
    })
  }
}

export const initAction = () =>
{
  return async dispatch =>
  {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
