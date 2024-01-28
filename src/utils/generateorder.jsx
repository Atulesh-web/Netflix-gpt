const razorpayKey = "rzp_test_2cbREZcEuKTcdD:u2dPOhgPAIMiwXF81dClvNJ1";
const CreateOrder = async () => {
    const data = {
      amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
      partial_payment: true,
      first_payment_min_amount: 230,
    };
  
    try {
      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(razorpayKey)}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        return errorData;
      }
  
      const responseData = await response.json();
      console.log("Response:", responseData);
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      return error;
    }
  };
  
export default CreateOrder;