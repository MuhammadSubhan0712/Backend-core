import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Posting from "./Pages/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/post",
        element: <Posting />,
      },
      {
        path: "*",
        element: (
          <h1 className="p-3 mt-5 text-3xl flex justify-center items-center text-red-600 font-semibold">
            {" "}
            404 | Not Found{" "}
          </h1>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
