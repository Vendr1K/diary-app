import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PageProvider } from './providers/PageProvider'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
)
