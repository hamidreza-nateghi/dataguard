import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Sidebar from './components/Sidebar'

function App() {
  return (
    <Box height='100vh'>
      <Sidebar />
      <Box pl='240px'>
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
