import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/PostPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AuthorPage } from "./pages/AuthorPage";
import { LoginPage } from "./pages/LoginPage";

import "./index.css";
import { DashboardPage } from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
  {
    path: "/author",
    element: <AuthorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
