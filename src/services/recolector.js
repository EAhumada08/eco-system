import axios from 'axios'

const local = 'http://localhost:1234/'

export const registrarRecolector = async (values) => {
  const res = await axios.post(`${local}recolectores`, values)
  return res
}
