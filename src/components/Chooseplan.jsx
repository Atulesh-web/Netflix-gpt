import { useState,useEffect } from "react";
import Plancard from "./Plancard";
import { Link } from "react-router-dom";
import PaymentComponent from "../utils/payment";
import { useLocation } from 'react-router-dom';
import registeruser from "../utils/registeruser";
// import CreateOrder from "../utils/generateorder";
const Chooseplan = () => {
  var arr = [1, 2, 3, 4];
  const [active, setActive] = useState(false);
  const location = useLocation();
  const receivedData = location.state ? location.state.data : null;

  useEffect(()=>{
    if(receivedData){
      
    }

  },[receivedData])
  const handlePayment = async() => {
    // const orderID = await CreateOrder()
    // console.log(orderID,"orderID")
    const paymentFunction = PaymentComponent();
    console.log(receivedData,"RD")
    const response = await paymentFunction(receivedData.email); // Call the function to open the Razorpay modal
    if(response.code === 'PAYMENT_SUCCESS'){
        registeruser(receivedData.email,receivedData.password)
    }
  };

  
  return (
    <div>
      <div className=" bg-white flex justify-between border-b-2 border-gray mb-4">
        <img
          className=" w-32 ml-16 mt-5 mb-5"
          src="https://image.similarpng.com/very-thumbnail/2020/11/Netflix-logo-design-illustration-on-transparent-background-PNG.png"
          alt="netflix-logo"
        />
        <h3 className="mr-16 mt-14 font-semibold text-lg">Sign In</h3>
      </div>
      <h1 className=" text-4xl ml-36 p-2 font-sans font-semibold">
        Choose the plan that’s right for you
      </h1>
      <div className="flex ml-32">
        {arr.map((val, index) => {
          return (
            <Plancard
              key={index}
              setActive={() => setActive(index)}
              active={active === index}
            />
          );
        })}
      </div>
      <div className="p-5" style={{ marginLeft: "36%" }}>
        <Link to={"/chooseplan"}>
          <button
            style={{ width: "40%" }}
            className="h-14 mt-8 text-lg bg-red-700 p-4 text-white"
            onClick={handlePayment}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chooseplan;
