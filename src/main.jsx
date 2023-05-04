import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Recipe from './components/Recipe/Recipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://server-italian-recipes-v-selfnet.vercel.app/chefs')
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
      },
      {
        path: '/recipe-detail',
        element: <RecipeDetail/>,
      },

      // {
      //   path: '/recipe/:id',
      //   element: <RecipeDetail/>,
      //   loader: ({params}) => fetch(`https://server-italian-recipes-v-selfnet.vercel.app/chefs/${params.id}`)
      // },

      {
        path: '/blog',
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
