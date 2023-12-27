
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyALnnVXpl6E_qz6WVrRVMuef5-Iu_Tw4UA",
  authDomain: "chatapp-98d80.firebaseapp.com",
  projectId: "chatapp-98d80",
  storageBucket: "chatapp-98d80.appspot.com",
  messagingSenderId: "343946840243",
  appId: "1:343946840243:web:11a59250e902854247c8c6",
  measurementId: "G-JVTW7JJGMV"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()