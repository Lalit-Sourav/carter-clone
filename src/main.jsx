import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContextProvider from './context/StroreContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
)
