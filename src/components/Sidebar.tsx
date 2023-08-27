import { Navbar } from './Navbar'
import { ToggleAll } from './ToggleAll'
import dataguard from '../assets/dataguard.svg'

function Sidebar() {
  return (
    <div style={{ backgroundColor: '#f1f1f1', height: '100%', position: 'fixed', width: 220 }}>
      <header style={{ padding: 24 }}>
        <img src={dataguard} alt='Logo' />
      </header>
      <Navbar />
      <ToggleAll />
    </div>
  )
}

export default Sidebar
