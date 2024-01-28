import PasswordInput from "./PasswordInput";
import PasswordInputsEmail from "./PasswordInputEmail";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Password = (props) => {
  const navigate = useNavigate();
  const [email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const location = useLocation();
  const receivedData = location.state ? location.state.data : null;

  useEffect(()=>{
    if(receivedData){
      setEmail(receivedData)
      console.log(email,"email")
    }

  },[email,receivedData])
  
  const passEmailandPassword = ()=>{
    console.log("password",password)
    navigate("/chooseplan", { state: { data: { email: email,password: password } } });
  }
  
  return (
    <div>
      <div className=" bg-white flex justify-between border-b-2 border-gray">
        <img
          className=" w-32 ml-16 mt-5 mb-5"
          src="https://image.similarpng.com/very-thumbnail/2020/11/Netflix-logo-design-illustration-on-transparent-background-PNG.png"
          alt="netflix-logo"
        />
        <h3 className="mr-16 mt-14 font-semibold text-lg">Sign In</h3>
      </div>
      <div
        style={{
          width: "500px",
          height: "500px",
          marginLeft: "35%",
          marginTop: "2%",
        }}
      >
        <h1 className="font-medium" style={{ fontSize: "32px" }}>
          Create a password to start &nbsp; &nbsp; &nbsp; your membership
        </h1>
        <p className=" text-lg">Just a few more steps and you're done! <br /> We hate paperwork, too.</p>
        <PasswordInputsEmail emailValue={email}/>
        <PasswordInput setPassword={setPassword} password={password}/>
        <button style={{width:"90%"}} className="rounded-md h-14 mt-8 text-lg bg-red-700 p-4 text-white" onClick={passEmailandPassword}>
              Next
            </button>
      </div>
     
    </div>
  );
};

export default Password;
