import { List } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import NavItem from './NavItem'
import axios from '../axios'

export function Navbar() {
  const { data, isLoading } = useQuery<string[]>({
    queryKey: ['tabs'],
    queryFn: () => axios.get('tabs').then((res) => res.data),
  })

  if (isLoading) return null

  return (
    <nav>
      <List>{data?.map((tab) => <NavItem key={tab} tabId={tab} />)}</List>
    </nav>
  )
}
