import React from 'react'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Allwords from './components/Allwords';
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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
              <Route path='/allwords' element={<Allwords/>}/>
            <Route/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
