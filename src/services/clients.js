import axios from 'axios'

const local = 'http://localhost:1234/'

export const registerClient = async (client) => {
  console.log(client)
  const { data } = await axios.post(`${local}clients`, client)
  return data
}
