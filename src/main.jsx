import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Team from './components/Team/Team'
import Publications from './components/Publications/Publications'
import Contacts from './components/Contacts/Contacts'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "team",
        element: <Team/>
      },
      {
        path: "publications",
        element: <Publications/>
      },
      {
        path: "contact",
        element: <Contacts/>
      },
      
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
