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
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path:"checkout",
        element:<Home/>
      },
      {
        path: "cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <h2 className="flex mt-5 p-5 bg-red-600 text-white justify-center items-center border-4 border-yellow-400 rounded-xl">404 | Not Found </h2>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
