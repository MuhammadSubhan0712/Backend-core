import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Success from "./Component/Success";
import Cancel from "./Component/Cancel";
import Checkout from "./Component/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path:"checkout",
        element:<Checkout/>
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <h2>404 | Not Found </h2>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
