import Browse from "./Browse"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Password from "./Password";
import Chooseplan from "./Chooseplan";
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: '/setpassword',
            element: <Password/>
        },
        {
            path: '/chooseplan',
            element: <Chooseplan/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body