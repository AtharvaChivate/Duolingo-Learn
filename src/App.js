import React from 'react'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './components/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Allwords from './components/Allwords';
import Layout from './components/Layout';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'san-serif',
    ].join(','),
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='allwords' element={<Allwords />} />
      <Route path='test' element={<Home />} />
      <Route path='aboutus' element={<Home />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
