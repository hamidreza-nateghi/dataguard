import { Button, Switch, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { queryClient } from '../queryClient'

type Props = {
  checked: boolean
  disabled?: boolean
}

function PluginSwitch({ pluginId, checked, disabled }: Props) {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.patch(`http://localhost:3000/plugins/${pluginId}`, newTodo)
    },
  })

  return (
    <div>
      <Button
        onClick={() =>
          mutation.mutate(
            {
              active: !checked,
            },
            {
              onSuccess: (data, variables, context) => {
                console.log('successful')
              },
            },
          )
        }
      >
        Add
      </Button>
      <Switch
        color='success'
        checked={checked}
        disabled={disabled}
        onClick={() =>
          mutation.mutate(
            {
              active: !checked,
            },
            {
              onSuccess: (data, variables, context) => {
                console.log('invalide')
                queryClient.invalidateQueries([pluginId])
              },
            },
          )
        }
      />
      <Typography variant='caption' component='p'>
        {checked ? 'Allowed' : 'Blocked'}
      </Typography>
    </div>
  )
}

export default PluginSwitch
