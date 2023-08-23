import { Switch, Typography } from '@mui/material'

function PluginSwitch() {
  return (
    <div>
      <Switch color='success' defaultChecked />
      <Typography variant='caption' component='p'>
        Allowed
      </Typography>
    </div>
  )
}

export default PluginSwitch
