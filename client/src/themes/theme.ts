import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500',
      contrastText: '#333333'
    },
    secondary: {
      main: '#1C77C3'
    },
    background: {
      default: '#0F1624',
      paper: '#0F1624'
    }
  },

  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F1624',
          color: 'white'
        }
      }
    }
  }
})

export default theme
