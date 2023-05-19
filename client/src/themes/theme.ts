import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#13ADC7'
    },
    secondary: {
      main: '#000000'
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
