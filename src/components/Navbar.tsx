import { List } from '@mui/material'
import NavItem from './NavItem'
import { useQuery } from '@tanstack/react-query'
import axios from '../axios'

export function Navbar() {
  const { data, isLoading } = useQuery<string[]>({
    queryKey: ['tabs'],
    queryFn: () => axios.get('tabs').then((res) => res.data),
  })

  console.log({ data })

  if (isLoading) return null

  return (
    <nav>
      <List>{data?.map((tab) => <NavItem key={tab} tabId={tab} />)}</List>
    </nav>
  )
}
