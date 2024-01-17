import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import PasswordInputsEmail from "./PasswordInputEmail";
const Password = () => {
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
        <PasswordInputsEmail/>
        <PasswordInput/>
        <Link to={'/chooseplan'}>
        <button style={{width:"90%"}} className="rounded-md h-14 mt-8 text-lg bg-red-700 p-4 text-white">
              Next
            </button>
            </Link>
      </div>
     
    </div>
  );
};

export default Password;
