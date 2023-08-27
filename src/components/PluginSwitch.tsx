import { Switch, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'

import { queryClient } from '../queryClient'
import axios from '../axios'
import { Plugin } from '../types'

type Props = {
  pluginId: Plugin['id']
  checked?: boolean
  disabled?: boolean
}

function PluginSwitch({ pluginId, checked, disabled }: Props) {
  const mutation = useMutation<unknown, unknown, { active: boolean }>({
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
