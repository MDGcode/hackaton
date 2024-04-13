import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthService } from '@genezio/auth';

AuthService.getInstance().setTokenAndRegion(
"0-ypob2j2rstzmkajecb35d3wm7q0oqimb",
 "eu-central-1");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider  clientId='30633693522-jd2bijo2t8drg37f1l9jngmmupdj3015.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)

