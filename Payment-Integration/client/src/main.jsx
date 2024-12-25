import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,

  children:[{
    path:"/",
    element:<Home/>,
  },
  {
    path:"success",
    element:</>
  },{}
]
}])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
