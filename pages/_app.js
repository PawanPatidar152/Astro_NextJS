// pages/_app.js
"use client";
import React, { useState } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ThemeContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
