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

  const disabledColor = disabled ? 'text.disabled' : undefined

  return (
    <Card variant='outlined' sx={{ width: 220, height: 280, padding: 2, userSelect: disabled ? 'none' : 'initial' }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography color={disabledColor}>{title}</Typography>
        <PluginSwitch checked={active} disabled={disabled} pluginId={pluginId} />
      </Stack>
      <Typography color={disabledColor}>{description}</Typography>
    </Card>
  )
}

export default PluginCard
