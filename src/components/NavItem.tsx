/* eslint-disable */
import { memo } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MarketingIcon from '@mui/icons-material/Campaign'
import FinanceIcon from '@mui/icons-material/AccountBalanceWallet'
import PersonnelIcon from '@mui/icons-material/AssignmentInd'
import { Link, useLocation } from 'react-router-dom'

import { useTab } from '../hooks/useTab'

const Icons: Record<string, React.ReactNode> = {
  'icon-marketing': <MarketingIcon />,
  'icon-finance': <FinanceIcon />,
  'icon-people': <PersonnelIcon />,
}

type Props = {
  tabId: string
}

function NavItem({ tabId }: Props) {
  const { pathname } = useLocation()

  const { data, isLoading } = useTab(tabId)

  if (isLoading) return null

  if (!data) return null

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
