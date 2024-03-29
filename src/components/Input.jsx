import { useState } from "react";
const Input = (props) => {
  const {setEmail,setPassword} = props;
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
    setInputStyle({ height: "20px", width: "20rem", paddingLeft: "18px" });
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
    setInputStyle1({ height: "20px", width: "20rem", paddingLeft: "18px" });

    const inputElement = document.getElementById("password");

    if (inputElement) {
      setTimeout(() => {
        inputElement.focus();
      }, 0);
    }
  };

  const removeStyleStates = () => {
    let eyeIcon = document.getElementById("eyeIcon");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (
      Object.keys(labelStyle).length > 0 ||
      Object.keys(labelStyle1).length > 0
    ) {
      if (password.value.length === 0) {
        eyeIcon.style.display = "none";
        setLabelStyle1({});
        setInputStyle1({ display: "none" });
      }
      if (email.value.length === 0) {
        setLabelStyle({});
        setInputStyle({ display: "none" });
      }
    }
  };
  const showPassword = () => {
    let password = document.getElementById("password");
    if (password.value.length > 0){
      return password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
    
  };

  const showEyeIcon = ()=>{
    let eyeIcon = document.getElementById("eyeIcon");
    let password = document.getElementById("password");
    setPassword(password.value)
    if (password.value.length > 0){
      eyeIcon.style.display = 'block'
    }
    else{
      eyeIcon.style.display = 'none'
    }
  }

  const setEmailForParent = ()=>{
    let email = document.getElementById("email");
    setEmail(email.value)
  }

  return (
    <>
      <div
        style={{ backgroundColor: "#333333" }}
        className="rounded-md h-14 mt-8"
      >
        <p
          className="p-4  text-gray-400"
          onClick={expandInput}
          style={{
            transition: "height 0.6s ease, width 0.6s ease, padding 0.6s ease",
            ...labelStyle,
          }}
        >
          Email or phone number
        </p>
        <input
          type="email"
          name=""
          id="email"
          autoComplete="username"
          style={{
            backgroundColor: "#333333",
            transition: "height 0.6s ease, width 0.6s ease,padding 0.6s ease",
            ...inputStyle,
          }}
          className="outline-none"
          onBlur={removeStyleStates}
          onChange={setEmailForParent}
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
            transition: "height 0.6s ease, width 0.6s ease, padding 0.6s ease",
            ...labelStyle1,
          }}
        >
          Password
        </p>
        <div className=" flex">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            style={{
              backgroundColor: "#333333",
              transition:
                "height 0.6s ease, width 0.6s ease, padding 0.6s ease",
              ...inputStyle1,
            }}
            onChange={showEyeIcon}
            className="outline-none"
            onBlur={removeStyleStates}
          />
          <svg
            style={{ display: "none", marginRight: "15px", cursor: "pointer" }}
            onClick={showPassword}
            id="eyeIcon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Input;
