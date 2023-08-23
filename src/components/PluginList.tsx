import { Grid } from '@mui/material'
import PluginCard from './PluginCard'

function PluginList({ tabdata }: any) {
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
