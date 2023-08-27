import { useQuery } from '@tanstack/react-query'

import axios from '../axios'
import { Plugin } from '../types'

export function usePlugin(pluginId: string) {
  return useQuery<Plugin>({
    queryKey: [pluginId],
    queryFn: () => axios.get(`plugins/${pluginId}`).then((res) => res.data),
  })
}
