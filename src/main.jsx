import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './component/layout/Layout.jsx';
import Home from './component/home/Home.jsx';
import Orange from './component/orange/Orange.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     

    ]
   
    
  },
  {
    path: '/home',
    element: <Layout></Layout>,
    
  },
  {
    path: "orange",
    element: <Orange />
  }
 



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
