import { Switch, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from '../axios'
import { queryClient } from '../queryClient'

type Props = {
  checked: boolean
  disabled?: boolean
}

function PluginSwitch({ pluginId, checked, disabled }: Props) {
  const mutation = useMutation({
    mutationFn: (plugin) => axios.patch(`plugins/${pluginId}`, plugin),
  })

  const toggleActive = () => {
    mutation.mutate({ active: !checked }, { onSuccess: () => queryClient.invalidateQueries([pluginId]) })
  }

  return (
    <div>
      <Switch color='success' checked={checked} disabled={disabled} onClick={toggleActive} />
      <Typography variant='caption' component='p'>
        {checked ? 'Allowed' : 'Blocked'}
      </Typography>
    </div>
  )
}

export default PluginSwitch
