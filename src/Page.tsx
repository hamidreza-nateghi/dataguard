import { Typography } from '@mui/material'
import PluginList from './components/PluginList'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import type { Tab } from './components/PluginList'

export function Page() {
  const {
    state: { tabId },
  } = useLocation()

  const { data, isLoading } = useQuery<Tab>({
    queryKey: [tabId],
    queryFn: () => axios.get(`http://localhost:3001/tabdata/${tabId}`).then((res) => res.data),
  })

  if (isLoading) return null

  if (!data) return null

  return (
    <div>
      <Typography>{data.title} Plugins</Typography>
      <PluginList tabdata={data} />
    </div>
  )
}
