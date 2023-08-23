import { List } from '@mui/material'
import NavItem from './NavItem'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Navbar() {
  const { data, isLoading } = useQuery<string[]>({
    queryKey: ['tabs'],
    queryFn: () => axios.get('http://localhost:3000/tabs').then((res) => res.data),
  })

  console.log({ data })

  if (isLoading) return null

  return (
    <nav>
      <List>
        {data?.map((tab) => <NavItem key={tab} tabId={tab} />)}
        {/* <NavItem icon={<FinanceIcon />} text='Finance' href='/finance' />
        <NavItem icon={<PersonnelIcon />} text='Personnel' href='/personnel' /> */}
      </List>
    </nav>
  )
}
