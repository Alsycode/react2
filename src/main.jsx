import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/styles/global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import UserRoot from './root/UserRoot';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot/>,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About/>,
        
      },
      {
        path: "/users",
        element: <Users/>,
        
      },
      {
        path: "/users/:id",
        element: <UserDetail/>,
        
      },
    ],
  },
 
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
