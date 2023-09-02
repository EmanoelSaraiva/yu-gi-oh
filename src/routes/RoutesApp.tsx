import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Description from "../pages/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/description/:name",
    element: <Description />,
  },
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
