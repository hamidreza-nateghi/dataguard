import { Card, Stack, Typography } from '@mui/material'
import PluginSwitch from './PluginSwitch'

function PluginCard() {
  return (
    <Card variant='outlined' style={{ maxWidth: 320, padding: 16 }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography>Plugin 1</Typography>
        <PluginSwitch />
      </Stack>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fuga cum minus, unde, architecto voluptatibus hic
        officiis autem corrupti in harum veritatis placeat iure quis earum neque nostrum alias ducimus.
      </Typography>
    </Card>
  )
}

export default PluginCard
