import { UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const items = [
  {
    key: 'client_profile',
    label: 'Mi perfil',
    icon: <UserOutlined />
  },
  {
    key: 'addWaste',
    label: 'Agregar desecho tecnologico',
    icon: <UserOutlined />
  }
]

export default function Nav () {
  const navigate = useNavigate()

  const onClick = (e) => {
    console.log(e.key)
    navigate(`/dashboard/${e.key}`)
  }
  return (
    <nav
      className='h-full w-40 p-4 bg-green-300'
    >
      <Menu
        style={{ marginTop: 24 }}
        onClick={onClick}
        items={items}
      />
    </nav>
  )
}
