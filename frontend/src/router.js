import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import Layout from './pages/Layout'
import UserPage from "./pages/UserPage"
import { Home } from "./pages/HomePage"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "userpage",
        element: <UserPage/>
      },
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])