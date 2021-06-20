import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './Context/cartContext';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


