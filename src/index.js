import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "history",
        element: <History />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
