// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,getReactNativePersistence, initializeAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dTgbDoGtnwiICcybE8-Ct3_n4xHUtfE",
  authDomain: "evaluacionmobiles2.firebaseapp.com",
  projectId: "evaluacionmobiles2",
  storageBucket: "evaluacionmobiles2.appspot.com",
  messagingSenderId: "687993231420",
  appId: "1:687993231420:web:c96f1b686a5fc9a6ff8b39"
};


const firebase = initializeApp(firebaseConfig);
//export const auth=getAuth(firebase);

export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});