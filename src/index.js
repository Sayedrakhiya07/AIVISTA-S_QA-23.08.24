import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-5edvcmjxi5hppyh0.us.auth0.com"
    clientId="LbquVAhjm3drXRzg3FylHS5Pu6rKQ2xi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > */}
    <GoogleOAuthProvider clientId="284562972019-f65t892klbcfo60d27rsqqk2afrra6t2.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;

    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
