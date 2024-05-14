import axios from 'axios'

const local = 'http://localhost:1234/'

export const registrarDesecho = async (idClient, data) => {
  const res = await axios.post(`${local}desechos`, { idClient, data })
  return res
}
