import { useQuery } from '@tanstack/react-query'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {
  const query = useQuery({
    queryKey: ['plugins'],
    queryFn: () => axios.get('http://localhost:3000/plugins').then((res) => res.data),
  })

  console.log({ query })

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar />
      <div style={{ paddingLeft: 240 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
