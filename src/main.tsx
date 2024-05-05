import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import BasicLayout from "./components/Layout/index.tsx";

import ServicePage from "./components/pages/ServicePage.tsx";
import PortfolioPage from "./components/pages/PortfolioPage.tsx";
import BlogList from "./components/pages/Blog/List.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "Portfolio",
          element: <PortfolioPage />,
        },
        {
          path: "Service",
          element: <ServicePage />,
        },
        {
          path: "Blog",
          element: <BlogList />,
        },
        {
          path: "Blog/:id",
          element: <div>About Page</div>,
        },
        {
          path: "Contract",
          element: <div>Contract Page</div>,
        },
      ],
    },
  ],
  {
    basename: "/2024camp-blog-web",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
