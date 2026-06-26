import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/Preloader.jsx';
import './index.css';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  return isLoading ? (
    <Preloader onFinished={() => setIsLoading(false)} />
  ) : (
    <App />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
