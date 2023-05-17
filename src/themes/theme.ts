import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F1624'
    },
    secondary: {
      main: '#000000'
    },
    info: {
      main: '#FFFFFF'
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
