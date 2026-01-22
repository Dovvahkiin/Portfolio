import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
