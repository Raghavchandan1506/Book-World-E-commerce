import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/Productcontext'
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-1kt3fg1ofvm85isb.us.auth0.com"
    clientId="eC0b6E9kz0AZKyaO98n5gmqXjPT8bKbc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </AppProvider>
  </Auth0Provider>
);
