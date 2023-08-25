import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
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
