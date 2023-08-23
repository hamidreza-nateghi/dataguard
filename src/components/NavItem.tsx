/* eslint-disable */
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  icon: React.ReactNode
  text: string
  href?: string
}

function NavItem({ icon, text, href }: Props) {
  const location = useLocation()
  const selected = href === location.pathname

  return (
    <ListItem>
      <ListItemButton component={Link} to={href} selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default NavItem
