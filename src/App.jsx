import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Home'
import { Toaster } from './components/ui/sonner'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }])
const App = () => {
  
  return (
    <>
       <Toaster/>
     <RouterProvider router={appRouter} />

    </>
  )
}

export default App
