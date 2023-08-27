import { Typography } from '@mui/material'
import { CustomSwitch } from './CustomSwitch'
import axios from '../axios'
import { queryClient } from '../queryClient'
import { useMutation } from '@tanstack/react-query'

export function ToggleAll() {
  const mutation = useMutation<unknown, unknown, { active: boolean }>({
    mutationFn: (active) => axios.put('batch-plugins', active),
  })

  const toggleAll = () => {
    mutation.mutate({ active: true }, { onSuccess: () => queryClient.invalidateQueries(['plugins']) })
  }

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
      <CustomSwitch onClick={toggleAll} />
    </div>
  )
}
