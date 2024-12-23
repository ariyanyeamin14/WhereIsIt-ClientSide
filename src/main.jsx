import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import LostFoundItems from './pages/LostFoundItems/LostFoundItems';
import AddLostFoundItem from './pages/AddLostFoundItem/AddLostFoundItem';
import AllRecoveredItems from './pages/AllRecoveredItems.jsx/AllRecoveredItems';
import ManageMyItems from './pages/ManageMyItems/ManageMyItems';
import AuthProvider from './Providers/AuthProvider';
import Login from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import PostDetails from './pages/PostDetails/PostDetails';
import UpdateItems from './pages/UpdateItems/UpdateItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "allItems",
        element: <LostFoundItems></LostFoundItems>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: "addItems",
        element: <AddLostFoundItem></AddLostFoundItem>
      },
      {
        path: "allRecovered",
        element: <AllRecoveredItems></AllRecoveredItems>
      },
      {
        path: "myItems",
        element: <ManageMyItems></ManageMyItems>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "items/:id",
        element: <PostDetails></PostDetails>
      },
      {
        path: "updateItems/:id",
        element: <UpdateItems></UpdateItems>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
