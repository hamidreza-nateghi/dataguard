import { Box, CircularProgress, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

import PluginList from './components/PluginList'
import { useTab } from './hooks/useTab'

export function Page() {
  const {
    state: { tabId },
  } = useLocation()

  const { data, isLoading } = useTab(tabId)

  if (isLoading) return <CircularProgress />

  if (!data) return <div>No data found.</div>

  return (
    <Box pt={2}>
      <Typography pb={2}>{data.title} Plugins</Typography>
      <PluginList tabdata={data} />
    </Box>
  )
}
