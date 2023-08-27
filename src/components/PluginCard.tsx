import { Card, Stack, Typography } from '@mui/material'

import PluginSwitch from './PluginSwitch'
import { usePlugin } from '../hooks/usePlugin'

type Props = {
  pluginId: string
}

function PluginCard({ pluginId }: Props) {
  const { data, isLoading } = usePlugin(pluginId)

  if (isLoading) return null

  if (!data) return null

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
