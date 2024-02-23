// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDZ236BBK8ovDzTMMni5YuwwTUW3lGzb7k",
//   authDomain: "guest-book-31efd.firebaseapp.com",
//   projectId: "guest-book-31efd",
//   storageBucket: "guest-book-31efd.appspot.com",
//   messagingSenderId: "308339909067",
//   appId: "1:308339909067:web:3268500edf79f32d62d64e",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const register = async (email, pass) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const user = res.user;
    return user;
    // console.log(user);
  } catch (err) {
    console.log(err);
  }
};
const login = async (email, pass) => {
  try {
    const log = await signInWithEmailAndPassword(auth, email, pass);
    return log;
  } catch (err) {
    console.log(err);
  }
};
export { register, login };
