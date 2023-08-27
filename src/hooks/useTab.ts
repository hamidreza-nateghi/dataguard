import { useQuery } from '@tanstack/react-query'

import axios from '../axios'
import { Tab } from '../types'

export function useTab(tabId: string) {
  return useQuery<Tab>({
    queryKey: [tabId],
    queryFn: () => axios.get(`/tabdata/${tabId}`).then((res) => res.data),
  })
}
