import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import InputGroup from './components/InputGroup'
import Blob from './components/Blob'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'san-serif',
    ].join(','),
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
          <Navbar />
          <Blob/>
          <InputGroup />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
