import { Layout, Menu, ConfigProvider } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { NavLink } from 'react-router-dom'

export default function App () {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: ' #00BF63',
            headerPadding: '5px'
          }
        }
      }}
    >

      <Header
        className=' h-fit'
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className=''>
          <NavLink
            to='/login'
            className=' p-2 rounded-md text-white hover:bg-green-400'
          >Ingresar
          </NavLink>
        </div>

      </Header>
    </ConfigProvider>
  )
}
