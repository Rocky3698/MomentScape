import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import Home from './Components/Home/Home';
import Videos from './Components/Posts/videos';
import Posts from './Components/Posts/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element: <Posts></Posts>
          },
          {
            path:'/videos',
            element: <Videos></Videos>
          },
          {
            path:'/posts',
            element: <Posts></Posts>
          }
        ]
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
