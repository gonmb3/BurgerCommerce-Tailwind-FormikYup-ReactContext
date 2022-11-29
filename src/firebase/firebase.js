import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyB5kKPFKFePK1QURfExhNGgVMTfaKQeGs8",
  authDomain: "burgers-ecommerce.firebaseapp.com",
  projectId: "burgers-ecommerce",
  storageBucket: "burgers-ecommerce.appspot.com",
  messagingSenderId: "801455745475",
  appId: "1:801455745475:web:8a4d2e8a53856e120df576"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app