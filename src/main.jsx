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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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
        element: <PrivateRoute>
          <AddLostFoundItem></AddLostFoundItem>
        </PrivateRoute>
      },
      {
        path: "allRecovered",
        element: <PrivateRoute>
          <AllRecoveredItems></AllRecoveredItems>
        </PrivateRoute>
      },
      {
        path: "myItems",
        element: <PrivateRoute>
          <ManageMyItems></ManageMyItems>
        </PrivateRoute>
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
        element: <PrivateRoute>
          <PostDetails></PostDetails>
        </PrivateRoute>
      },
      {
        path: "updateItems/:id",
        element: <PrivateRoute>
          <UpdateItems></UpdateItems>
        </PrivateRoute>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
