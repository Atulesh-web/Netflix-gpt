import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import SignUp from './SignUp';
const Login = () => {
  const [signUp,setSignUp] = useState(false);
  const triggerSignUpPage = () => {
      setSignUp(true)
  };
  
  return signUp ? (
    <SignUp/>
  ) :  (
    <div>
      <div className="absolute w-40 h-40 m-2 p-2">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt=""
        />
      </div>

      <div
        className="absolute text-white h-5/6 rounded-md left-1/2 -translate-x-1/2 top-28"
        style={{ backgroundColor: "#130a0a", width: "28rem" }}
      >
        <div className=" h-4  m-16">
          <h1 className=" text-3xl font-medium">Sign In</h1>
          <form action="">
            <Input />

            <button className="rounded-md h-14 mt-8 bg-red-700 p-4 w-80">
              Sign In
            </button>
          </form>
          <p className="text-gray-700 font-medium mt-6 ml-1">
            New to Netflix?
            <span
              className=" pl-2 text-slate-50 cursor-pointer"
              onClick={triggerSignUpPage}
            >
              Sign up now
            </span>
            .
          </p>
        </div>
      </div>
      <Header className="relative" />
    </div>
  );
};

export default Login;
