import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Crew, Tech, Destination, NotFoundPage } from "./pages"

const router = createBrowserRouter([
  {
    index: true, 
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: 'destination',
    element: <Destination />,
    errorElement: <NotFoundPage/>
  },
  {
    path: 'crew',
    element: <Crew />,
    errorElement: <NotFoundPage/>
  },
  {
    path: 'tech',
    element: <Tech />,
    errorElement: <NotFoundPage/>
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default router