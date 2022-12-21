import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../css/main.css'
import UserContextProvider from './loginSystem/context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />    
    </UserContextProvider>
  </React.StrictMode>
)
