import axios from 'axios'

const local = 'http://localhost:1234/'

export const validateEmail = async (values) => {
  const { data } = await axios.post(`${local}clients/validateemail`, values)
  return { data }
}
