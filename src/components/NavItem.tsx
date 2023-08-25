/* eslint-disable */
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from '../axios'
import { Link, useLocation } from 'react-router-dom'
import MarketingIcon from '@mui/icons-material/Campaign'
import FinanceIcon from '@mui/icons-material/AccountBalanceWallet'
import PersonnelIcon from '@mui/icons-material/AssignmentInd'
import { memo } from 'react'

const Icons = {
  'icon-marketing': <MarketingIcon />,
  'icon-finance': <FinanceIcon />,
  'icon-people': <PersonnelIcon />,
}

type Props = {
  tabId: string
}

function NavItem({ tabId }: Props) {
  const { pathname } = useLocation()

  const { data, isLoading } = useQuery({
    queryKey: [tabId],
    queryFn: () => axios.get(`/tabdata/${tabId}`).then((res) => res.data),
  })

  console.log({ data })

  if (isLoading) return null

  const { title, icon } = data

  const selected = title.toLowerCase() === pathname.slice(1)

  return (
    <ListItem>
      <ListItemButton component={Link} to={title.toLowerCase()} state={{ tabId }} selected={selected}>
        <ListItemIcon>{Icons[icon]}</ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default memo(NavItem)
