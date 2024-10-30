import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import QueryContextProvider from './context/QueryContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryContextProvider>
      <App />
    </QueryContextProvider>
  </StrictMode>
);
