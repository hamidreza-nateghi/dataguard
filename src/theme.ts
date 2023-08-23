import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    success: { main: '#5ac88d' },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#c62f40',
        },
        track: {
          backgroundColor: '#c62f40',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderLeft: '6px solid #f1f1f1',
          paddingTop: 12,
          paddingBottom: 12,

          ...(ownerState.selected && {
            backgroundColor: 'white !important',
            borderColor: '#c62f40',
          }),
        }),
      },
    },
  },
})

export default theme
