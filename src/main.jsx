import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/Context'
import Web3ContextProvider from './Context/Web3ContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Web3ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
