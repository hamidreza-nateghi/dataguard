import { Typography } from '@mui/material'
import PluginList from '../components/PluginList'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Marketing() {
  const {
    state: { tabId },
  } = useLocation()

  const { data, isLoading } = useQuery({
    queryKey: [tabId],
    queryFn: () => axios.get(`http://localhost:3000/tabdata/${tabId}`).then((res) => res.data),
  })

  if (isLoading) return null

  return (
    <div>
      <Typography>{data.title} Plugins</Typography>
      <PluginList tabdata={data} />
    </div>
  )
}

export default Marketing
