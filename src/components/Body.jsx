import Browse from "./Browse"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Password from "./Password";
import Chooseplan from "./Chooseplan";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
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
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User in signed in
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
         
          } else {
            // User is signed out
            dispatch(removeUser())
            
          }
        });
  
  },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body