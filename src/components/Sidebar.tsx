import dataguard from '../assets/dataguard.svg'
import NavItem from './NavItem'
import MarketingIcon from '@mui/icons-material/Campaign'
import FinanceIcon from '@mui/icons-material/AccountBalanceWallet'
import PersonnelIcon from '@mui/icons-material/AssignmentInd'
import { List } from '@mui/material'
import { ToggleAll } from './ToggleAll'

function Sidebar() {
  return (
    <div style={{ backgroundColor: '#f1f1f1', height: '100%', position: 'fixed', width: 220 }}>
      <header style={{ padding: 24 }}>
        <img src={dataguard} alt='Logo' />
      </header>
      <nav>
        <List>
          <NavItem icon={<MarketingIcon />} text='Marketing' href='/marketing' />
          <NavItem icon={<FinanceIcon />} text='Finance' href='/finance' />
          <NavItem icon={<PersonnelIcon />} text='Personnel' href='/personnel' />
        </List>
      </nav>
      <ToggleAll />
    </div>
  )
}

export default Sidebar
