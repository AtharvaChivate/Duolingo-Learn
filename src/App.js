import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import InputGroup from './components/InputGroup'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'san-serif',
    ].join(','),
  },});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <InputGroup/>
      </ThemeProvider>
    </>
  )
}

export default App