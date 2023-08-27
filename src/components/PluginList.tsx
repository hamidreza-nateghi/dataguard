import { Grid } from '@mui/material'

import PluginCard from './PluginCard'
import { Tab } from '../types'

type Props = {
  tabdata: Tab
}

function PluginList({ tabdata }: Props) {
  const { plugins } = tabdata

  return (
    <Grid container spacing={4}>
      {plugins.map((plugin) => (
        <Grid item key={plugin}>
          <PluginCard pluginId={plugin} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PluginList
