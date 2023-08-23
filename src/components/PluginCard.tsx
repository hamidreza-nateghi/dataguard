import { Card, Stack, Typography } from '@mui/material'
import PluginSwitch from './PluginSwitch'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function PluginCard({ pluginId, status }: any) {
  const { data, isLoading } = useQuery({
    queryKey: [pluginId],
    queryFn: () => axios.get(`http://localhost:3000/plugins/${pluginId}`).then((res) => res.data),
  })

  if (isLoading) return null

  console.log('plugin', data)

  const { title, description, active, disabled } = data

  return (
    <Card variant='outlined' style={{ maxWidth: 320, padding: 16 }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography>{title}</Typography>
        <PluginSwitch checked={active} disabled={disabled} pluginId={pluginId} />
      </Stack>
      <Typography>{description}</Typography>
    </Card>
  )
}

export default PluginCard
