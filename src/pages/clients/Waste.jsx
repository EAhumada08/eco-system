import { useEffect, useState } from 'react'
import '../../estilos/usuario.css'
import { getDesechosById } from '../../services/clients'

export default function Waste () {
  const [desechos, setDesechos] = useState([])

  const getDesechos = async () => {
    const id = window.localStorage.getItem('idUser')

    try {
      const data = await getDesechosById(id)
      setDesechos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDesechos()
  }, [])

  return (
    <div className=' p-2 m-2'>
      <table className='contenedortabla'>
        <thead>
          <tr>
            <th>Numero de serie</th>
            <th>Producto</th>
            <th>Estado</th>
            <th>Costo</th>
            <th>Fecha de recoleccion</th>
          </tr>
        </thead>
        <tbody>
          {
                desechos.map((desecho) => {
                  return (
                    <tr key={desecho.desecho_id}>
                      <td>{desecho.desecho_id}</td>
                      <td>{desecho.producto}</td>
                      <td>{desecho.estado}</td>
                      <td>{desecho.costo}</td>
                      <td>{desecho.prog_date}</td>
                    </tr>
                  )
                })
            }
        </tbody>

      </table>
    </div>

  )
}
