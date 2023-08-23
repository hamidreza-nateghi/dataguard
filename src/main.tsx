import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Finance, Marketing, Personnel } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/marketing',
    element: <Marketing />,
  },
  {
    path: '/finance',
    element: <Finance />,
  },
  {
    path: '/personnel',
    element: <Personnel />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
