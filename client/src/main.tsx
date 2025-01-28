import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
// import './index.css'
import App from './App.tsx'
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
    <Notifications />
      <App />
    </MantineProvider>
  </StrictMode>,
)
