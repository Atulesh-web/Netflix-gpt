import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from  './firebase'
const registeruser = (email,password) => {
    
    console.log(email,password,"props")
    
  createUserWithEmailAndPassword(auth, email.email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
      // ..
    });
  return <div>registeruser</div>;
};

export default registeruser;
