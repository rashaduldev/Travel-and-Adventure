import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registation from './Pages/Registation';
import Errorpage from './Pages/Errorpage';
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authprovider from './Provider/Authprovider';
import About from './Pages/About';
import DestinationPage from './Pages/Destination/DestinationPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"destrination",
        element:<DestinationPage></DestinationPage>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registation",
        element:<Registation></Registation>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>

    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>,
)
