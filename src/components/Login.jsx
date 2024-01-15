import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [inputStyle, setInputStyle] = useState({
    display: "none",
    height: 0,
    width: 0,
  });
  const [labelStyle, setLabelStyle] = useState({});
  const [inputStyle1, setInputStyle1] = useState({
    display: "none",
    height: 0,
    width: 0,
  });
  const [labelStyle1, setLabelStyle1] = useState({});

  const expandInput = () => {
    let password = document.getElementById("password");
    if (password.value.length === 0) {
      setLabelStyle1({});
      setInputStyle1({ display: "none" });
    }
    setInputStyle({ height: "20px", width: "20rem", paddingLeft: "20px" });
    setLabelStyle({ fontSize: "small", paddingTop: "5px", paddingBottom: "0" });

    const inputElement = document.getElementById("email");

    if (inputElement) {
      setTimeout(() => {
        inputElement.focus();
      }, 0);
    }
  };
  const expandInput2 = () => {
    let email = document.getElementById("email");
    if (email.value.length === 0) {
      setLabelStyle({});
      setInputStyle({ display: "none" });
    }
    setLabelStyle1({
      fontSize: "small",
      paddingTop: "5px",
      paddingBottom: "0",
    });
    setInputStyle1({ height: "20px", width: "20rem", paddingLeft: "20px" });

    const inputElement = document.getElementById("password");

    if (inputElement) {
      setTimeout(() => {
        inputElement.focus();
      }, 0);
    }
  };

  const removeStyleStates = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (
      Object.keys(labelStyle).length > 0 ||
      Object.keys(labelStyle1).length > 0
    ) {
      if (password.value.length === 0) {
        setLabelStyle1({});
        setInputStyle1({ display: "none" });
      }
      if (email.value.length === 0) {
        setLabelStyle({});
        setInputStyle({ display: "none" });
      }
    }
  };
  return (
    <div>
      <div className="absolute w-40 h-40 m-2 p-2">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt=""
        />
      </div>

      <div
        className="absolute text-white h-5/6 rounded-md left-1/2 -translate-x-1/2 top-28"
        // onClick={removeStyleStates}
        style={{ backgroundColor: "#130a0a", width: "28rem" }}
      >
        <div className=" h-4  m-16">
          <h1 className=" text-3xl font-medium">Sign In</h1>
          <div
            style={{ backgroundColor: "#333333" }}
            className="rounded-md h-14 mt-8"
          >
            <p
              className="p-4  text-gray-400"
              onClick={expandInput}
              style={{
                transition:
                  "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
                ...labelStyle,
              }}
            >
              Email or phone number
            </p>
            <input
              type="email"
              name=""
              id="email"
              style={{
                backgroundColor: "#333333",
                transition: "height 0.3s ease, width 0.3s ease",
                ...inputStyle,
              }}
              className="outline-none"
              onBlur={removeStyleStates}
            />
          </div>

          <div
            style={{ backgroundColor: "#333333" }}
            className="rounded-md h-14 mt-8"
          >
            <p
              className="p-4  text-gray-400"
              onClick={expandInput2}
              style={{
                transition:
                  "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
                ...labelStyle1,
              }}
            >
              Password
            </p>
            <input
              type="password"
              name="password"
              id="password"
              style={{
                backgroundColor: "#333333",
                transition:
                  "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
                ...inputStyle1,
              }}
              className="outline-none"
              onBlur={removeStyleStates}
            />
          </div>
          <button className="rounded-md h-14 mt-8 bg-red-700 p-4 w-80">
            Sign In
          </button>
        </div>
      </div>
      <Header className="relative" />
    </div>
  );
};

export default Login;
