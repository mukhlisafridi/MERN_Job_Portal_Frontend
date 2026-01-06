import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner";
import Jobs from "./pages/Jobs";
import Browser from "./pages/Browser";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
   {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
   {
    path: "/profile",
    element: <Profile />,
  },
]);
const App = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
