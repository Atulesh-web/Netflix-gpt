
const PasswordInputsEmail = () => {
  return (
       <div
            style={{ width: "90%" }}
            className="rounded-md h-14 text-left items-center border-2 border-gray-400 mt-4"
          >
            <p
              className="p-4  text-gray-600  rounded-md"
              style={{
                transition:
                  "height 0.3s ease, width 0.3s ease, padding 0.3s ease",
                  fontSize: "small", paddingTop: "5px", paddingBottom: "0" 
              }}
            >
              Email
            </p>
            <input
              type="email"
              value={"atuleshsharma"}
              name=""
              id="email"
              autoComplete="username"
              style={{
                transition: "height 0.3s ease, width 0.3s ease",
                height: "20px", width: "20rem", paddingLeft: "18px"
              }}
              className="outline-none caret-white"
            />
          </div>
    
  )
}

export default PasswordInputsEmail;