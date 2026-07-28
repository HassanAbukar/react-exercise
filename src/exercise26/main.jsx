import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import BlogPost from './exercise26/BlogPost'
import Home from './exercise26/components/Home'
import PostDetail from './exercise26/components/PostDetail'
import CreatePost from './exercise26/components/CreatePost'
import Login from './exercise26/components/Login'
import NotFound from './exercise26/components/NotFound'
import ProtectedRoute from './exercise26/components/ProtectedRoute'
import { AuthProvider } from './exercise26/context/AuthContext'
import { PostsProvider } from './exercise26/context/PostsContext'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogPost />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:postId', element: <PostDetail /> },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
)