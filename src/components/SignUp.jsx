import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
const SignUp = () => {
  const [inputStyle, setInputStyle] = useState({
    display: "none",
    height: 0,
    width: 0,
  });
  const [labelStyle, setLabelStyle] = useState({});

  const expandInput = () => {
    setInputStyle({ height: "20px", width: "20rem", paddingLeft: "18px" });
    setLabelStyle({ fontSize: "small", paddingTop: "5px", paddingBottom: "0" });

    const inputElement = document.getElementById("email");

    if (inputElement) {
      setTimeout(() => {
        inputElement.focus();
      }, 0);
    }
  };

  const removeStyleStates = () => {
    let email = document.getElementById("email");
    if (Object.keys(labelStyle).length > 0) {
      if (email.value.length === 0) {
        setLabelStyle({});
        setInputStyle({ display: "none" });
      }
    }
  };
  return (
    <div>
      <div className="flex absolute ">
        <div className="w-40 h-40 m-2 p-2 ml-40">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt=""
          />
        </div>
        <div style={{marginLeft: "820px"}}>
          <button className="bg-red-600 h-8 w-20 m-8 mr-40 text-base font-medium text-white rounded-md p-1">
            Sign In
          </button>
        </div>
      </div>
      <div className=" h-2/4 w-2/3 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 text-center font-sans tracking-wide">
        <h1 style={{ fontSize: "3rem" }} className=" text-white font-extrabold">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white p-4 text-xl font-semibold">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white p-4 text-xl font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex">
          <div
            style={{ backgroundColor: "#231b10", width: "35%" }}
            className="rounded-md h-14 text-left items-center ml-56"
          >
            <p
              className="p-4  text-gray-200  rounded-md"
              onClick={expandInput}
              style={{
                transition:
                  "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
                ...labelStyle,
              }}
            >
              Email address
            </p>
            <input
              type="email"
              name=""
              id="email"
              autoComplete="username"
              style={{
                backgroundColor: "#231b10",
                transition: "height 0.3s ease, width 0.3s ease",
                ...inputStyle,
              }}
              className="outline-none caret-white"
              onBlur={removeStyleStates}
            />
          </div>
          <div>
            <button className="bg-red-600 h-14 ml-3 w-52 text-2xl font-medium text-white rounded-md p-1">
            <Link to={'/setpassword'}> Get Started </Link> <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block -mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Header className="relative" />
    </div>
  );
};

export default SignUp;
