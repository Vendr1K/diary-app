import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PageProvider, NoteProvider } from './providers'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </PageProvider>
  </React.StrictMode>
)
