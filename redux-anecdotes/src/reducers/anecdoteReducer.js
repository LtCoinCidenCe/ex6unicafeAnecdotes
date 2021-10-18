const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) =>
{
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state = [], action) =>
{
  // console.log('state now: ', state)
  // console.log('action', action)
  switch (action.type)
  {
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(n => n.id === id)
      const changed = { ...anecdote, votes: anecdote.votes + 1 }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changed)
    case 'NEW':
      const content = action.data.content
      return [...state, asObject(content)]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const voteAction = (id) =>
{
  return {
    type: 'VOTE',
    data: { id: id }
  }
}

export const createAction = (content) =>
{
  return {
    type: 'NEW',
    data: {
      content: content
    }
  }
}

export const initAction = (anecdotes) =>
{
  return {
    type: 'INIT',
    data: anecdotes
  }
}

export default anecdoteReducer
