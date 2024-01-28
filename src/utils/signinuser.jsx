import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
const signinuser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential?.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // You might want to handle the error in some way or throw it again if not handled here
    throw error;
  }
};


export default signinuser