import { Card, Stack, Typography } from '@mui/material'
import PluginSwitch from './PluginSwitch'
import { useQuery } from '@tanstack/react-query'
import axios from '../axios'

type Props = {
  pluginId: string
}

function PluginCard({ pluginId }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: [pluginId],
    queryFn: () => axios.get(`plugins/${pluginId}`).then((res) => res.data),
  })

  if (isLoading) return null

  const { title, description, active, disabled } = data

  return (
    <Card variant='outlined' style={{ width: 220, height: 280, padding: 16 }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography>{title}</Typography>
        <PluginSwitch checked={active} disabled={disabled} pluginId={pluginId} />
      </Stack>
      <Typography>{description}</Typography>
    </Card>
  )
}

export default PluginCard
