import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'

const route = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
      path : "about",
      element :<About/>
      },
      {
        path : "contact",
        element : <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
