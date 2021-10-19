import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>
{
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) =>
{
  const payload = { content, votes: 0 }
  const response = await axios.post(baseUrl, payload)
  return response.data
}

const updateOne = async (id, anecdote) =>
{
  const response = await axios.put(`${baseUrl}/${id}`,anecdote) // TODO
  return response.data
}

const anecdoteService = { getAll, createNew, updateOne }
export default anecdoteService
