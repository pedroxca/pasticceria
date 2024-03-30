import { createTheme } from "@mui/material";



export const theme = createTheme({
  // palette: {
  //   mode: 'dark',
  // },
  palette: {
    mode: 'light',
    primary: {
      main: '#854442',
    },
    secondary: {
      main: '#5e4134',
      contrastText: '#3c2f2f',
    },
    background: {
      default: '#fff4e6',
    },
    text: {
      primary: '#3c2f2f',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: '#854442 !important',
          color: '#3c2f2f !important',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})