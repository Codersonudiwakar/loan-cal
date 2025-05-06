import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import DrawerAppBar from './Navbar';
import EmiCalculator from './EmiCalculator';
import About from './About';
import CurrencyExchangeTable from './CurrencyExchangeTable';
import ErrorPage from './ErrorPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerAppBar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className='body-container'>
        <Routes>
          <Route path="/" element={<EmiCalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange-rates" element={<CurrencyExchangeTable />} />
          <Route path="/error_page" element={<ErrorPage />} />
        </Routes></div>
    </ThemeProvider>
  );
}

export default App;
