import '../../estilos/usuario.css'
import '../../estilos/recolector.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllDesechos } from '../../services/desechos'
import { Checkbox } from 'antd'

export default function ProgramarEnvio () {
  const [desechos, setDesechos] = useState([])
  const [cont, setCont] = useState(0)

  const getDesechos = async () => {
    try {
      const res = await getAllDesechos()
      setDesechos(res)
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (e) => {
    const data = e.target.value
    if (e.target.checked === false) setCont(cont - data.peso)
    if (e.target.checked === true) {
      setCont(cont + data.peso)
      console.log(e.target.name, data.peso, e.target.checked)
    }
  }
  console.log(cont)
  console.log(desechos)

  useEffect(() => {
    getDesechos()
  }, [])

  const toggleSidePanel = () => {
    const sidePanel = document.getElementById('side-panel')
    sidePanel.style.display = (sidePanel.style.display === 'block') ? 'none' : 'block'
  }

  return (
    <center>

      <div className='divmenu'>
        <div id='side-panel' className='contenido'>
          <NavLink to='/'><a>Panel</a><br /></NavLink>
          <NavLink to='/panel'><a>Panel</a><br /></NavLink>
          <NavLink to='/'><a>Panel</a><br /></NavLink>
          <NavLink to='/login'><a>Cerrar sesion</a><br /></NavLink>
        </div>
        <div id='side-panel-trigger' className='side-panel-trigger'>
          <a
            href='#'
            onClick={toggleSidePanel}
          ><img src='../../public/imgs/menu.png' width='60px' alt='' />
          </a>
        </div>
      </div>
      <div className='contenedoragregardesecho mt-10'>
        <br />
        <div className='titulo'>
          <label htmlFor='crear'>Puntos de recoleccion</label>
        </div>
        <div className='contenedordatossubidos'>
          <div className='contenedorbuscar'>
            <div className='numserie'>
              <div className='labelserie'>
                <label htmlFor=''>Numero de serie</label>
              </div>
              <div class='divinput'>
                <input type='text' class='inputserie' /><img src='../../public/imgs/lupa.png' alt='' width='15%' />
              </div>
            </div>

          </div>
          <div className='contenedortabla mt-20'>
            <table>
              <thead>
                <tr>
                  <th>Numero de serie </th>
                  <th>Producto</th>
                  <th>Cliente</th>
                  <th>Domicilio</th>
                  <th>Costo</th>
                  <th>Peso</th>
                  <th>Marcar</th>
                </tr>
              </thead>
              <tbody>
                {
                    desechos.map((desecho) => {
                      return (

                        <tr key={desecho.desecho_id}>
                          <td>{desecho.desecho_id}</td>
                          <td>{desecho.producto}</td>
                          <td>{desecho.nombre_cliente} {desecho.apellido_cliente}</td>
                          <td>{desecho.calle} {desecho.extN}, {desecho.col}, {desecho.cp} {desecho.city}, {desecho.state}</td>
                          <td>${desecho.costo}</td>
                          <td>{desecho.peso}kg</td>

                          <td><Checkbox
                            name={desecho.desecho_id}
                            value={desecho}
                            onChange={onChange}
                              />
                          </td>

                        </tr>

                      )
                    })

                }

              </tbody>
            </table>

            <h1>Peso: {cont}</h1>
          </div>
        </div>
      </div>

    </center>
  )
}
