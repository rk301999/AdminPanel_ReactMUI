import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import List from './pages/list/List.jsx'
import New from './pages/new/New.jsx'
import Single from './pages/single/Single.jsx'
import { userInputs,productInputs } from './formSource.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'users',
        element:<List/>,
        children:[
          {
            path:':userid',
            element:<Single/>
          },
          {
            path:'new',
            element:<New inputs={userInputs} title="Add new Input"/>
          }
        ]
      },
      {
        path:'products',
        element:<List/>,
        children:[
          {
            path:':productId',
            element:<Single/>
          },
          {
            path:'new',
            element:<New inputs={productInputs} title="Add new Product"/>
          }
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
