import { useState } from "react";
const PasswordInput = (props) => {
  const [inputStyle1, setInputStyle1] = useState({
    display: "none",
    height: 0,
    width: 0,
  });
  const [labelStyle1, setLabelStyle1] = useState({});

  const expandInput2 = () => {
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
    let password = document.getElementById("password");
    if (Object.keys(labelStyle1).length > 0) {
      if (password.value.length === 0) {
        eyeIcon.style.display = "none";
        setLabelStyle1({});
        setInputStyle1({ display: "none" });
      }
    }
  };

  const showPassword = () => {
    let password = document.getElementById("password");
    if (password.value.length > 0) {
      return password.type === "password"
        ? (password.type = "text")
        : (password.type = "password");
    }
  };

  const showEyeIcon = () => {
    let eyeIcon = document.getElementById("eyeIcon");
    let password = document.getElementById("password");
    props.setPassword(password.value)
    if (password.value.length > 0) {
      eyeIcon.style.display = "block";
    } else {
      eyeIcon.style.display = "none";
    }
  };
  return (
    <div
      style={{ width: "90%" }}
      className="rounded-md h-14 mt-4 border-2 border-gray-400"
    >
      <p
        className="p-4  text-gray-600"
        onClick={expandInput2}
        style={{
          transition: "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
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
            
            transition: "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
            ...inputStyle1,
          }}
          onChange={showEyeIcon}
          className="outline-none"
          onBlur={removeStyleStates}
        />
        <svg
          style={{ display: "none", marginLeft:"80px", cursor: "pointer" }}
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
  );
};

export default PasswordInput;
