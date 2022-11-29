import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAMgEHqilXOC38Tvv4llKdki6OybcjD76g",
  authDomain: "ecommerce-burgers.firebaseapp.com",
  projectId: "ecommerce-burgers",
  storageBucket: "ecommerce-burgers.appspot.com",
  messagingSenderId: "6578964734",
  appId: "1:6578964734:web:90fdc1e345eb4b757afdaf"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app