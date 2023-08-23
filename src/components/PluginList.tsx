import { Grid } from '@mui/material'
import PluginCard from './PluginCard'

function PluginList() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <PluginCard />
      </Grid>
      <Grid item>
        <PluginCard />
      </Grid>
      <Grid item>
        <PluginCard />
      </Grid>
      <Grid item>
        <PluginCard />
      </Grid>
      <Grid item>
        <PluginCard />
      </Grid>
      <Grid item>
        <PluginCard />
      </Grid>
    </Grid>
  )
}

export default PluginList
