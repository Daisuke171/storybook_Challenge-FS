import { createTheme } from '@mui/material/styles'

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50', // base
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green.A400, //bright neon green
      light: green.A200,
      dark: green.A700,
      contrastText: '#000',
    },
    secondary: {
      main: '#80cbc4'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd'
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontWeight: 700, fontSize: '3rem' },
    h2: { fontWeight: 600, fontSize: '2.25rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
    body1: { fontSize: '1rem', lineHeight: '1.6' },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default darkTheme;