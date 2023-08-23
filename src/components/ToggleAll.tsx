import { Typography } from '@mui/material'
import { CustomSwitch } from './CustomSwitch'

export function ToggleAll() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <Typography variant='caption'>All plugins enabled</Typography>
      <CustomSwitch defaultChecked />
    </div>
  )
}
