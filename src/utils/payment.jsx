const PaymentComponent = () => {
  const extractNameFromEmail = (email) => {
    const name = email?.split("@")[0];
    return name ? name?.replace(/(?:^|\s)\S/g, (a) => a?.toUpperCase()) : null;
  };

  const openRazorpayModal = async (props) => {
    return new Promise((resolve, reject) => {
      const name = extractNameFromEmail(props.email);
    
      const options = {
        key: "rzp_test_2cbREZcEuKTcdD", // Enter the Key ID generated from the Dashboard
        amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Pay Buddy", //your business name
        description: "Test Transaction",
        image:
          "https://w7.pngwing.com/pngs/93/992/png-transparent-razorpay-logo-tech-companies.png",
        handler: function (response) {
          if (response.razorpay_payment_id) {
            // Payment successful
            const paymentResponse = {
              code: "PAYMENT_SUCCESS",
              razorpay_payment_id: response.razorpay_payment_id,
            };

            resolve(paymentResponse)
          } else {
            // Payment failed
            const paymentResponse = {
              code: "PAYMENT_FAILED",
              error: response.error_description || "Payment failed",
            };

            reject(paymentResponse);
          }
        },
        order_id: "order_NTJXhtVDxCEulc", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: name, //your customer's name
          email: props?.email,
          contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };

  // Return the function, not the result of calling the function
  return openRazorpayModal;
};

export default PaymentComponent;
