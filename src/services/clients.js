import axios from 'axios'

const local = 'http://localhost:1234/'

export const registerClient = async (client) => {
  console.log(client)
  const { data } = await axios.post(`${local}clients`, client)
  return data
}

export const validateAccount = async (client) => {
  const { data } = await axios.post(`${local}clients/login`, client)
  return data
}

export const getClientById = async (id) => {
  const { data } = await axios.get(`${local}clients/${id}`)
  return data
}
