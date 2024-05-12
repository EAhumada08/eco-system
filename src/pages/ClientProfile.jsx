import { useEffect, useState } from 'react'
import { getClientById } from '../services/clients'
import EditProfile from '../components/client/EditProfile'

export default function ClientProfile () {
  const [edit, setEdit] = useState(false)
  const [client, setClient] = useState({
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
    tel: '',
    calle: '',
    extN: '',
    intN: '',
    col: '',
    cp: '',
    city: '',
    state: ''
  })

  const getClient = async () => {
    const id = window.localStorage.getItem('idUser')

    try {
      const res = await getClientById(id)
      setClient(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClient()
  }, [])

  const { firstname, lastname, email, pass, tel, col, city, state, cp, extN, intN, calle } = client

  const handleEdit = () => {
    setEdit(true)
  }

  return (
    <>
      {
      edit
        ? <EditProfile client={client} />

        : <div className='p-4 m-4  flex flex-col gap-y-5  '>

          <h1 className=' font-bold text-lg mb-7'>Informacion personal</h1>
          <p>{`Nombre completo: ${firstname} ${lastname}`}</p>
          <p>{`Correo: ${email}`}</p>
          <p>{`Telefono: ${tel}`}</p>

          <h1 className=' font-bold text-lg mb-4'>Direccion</h1>
          <p>{`${calle} ${extN}, ${col}, ${city}, ${state}`}</p>

          <button
            className=' border-2 border-black p-2 font-semibold bg-[#00BF63] hover:bg-green-300'
            onClick={handleEdit}
          >
            Editar datos
          </button>

          </div>
}
    </>

  )
}
