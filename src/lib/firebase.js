import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCW-9EUkDOamu9Uf-lyMNsIXbYRM-B3ba8",
  authDomain: "trixsocial-8663e.firebaseapp.com",
  projectId: "trixsocial-8663e",
  storageBucket: "trixsocial-8663e.appspot.com",
  messagingSenderId: "1079234353355",
  appId: "1:1079234353355:web:d58d6f7843592907c8234e"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);