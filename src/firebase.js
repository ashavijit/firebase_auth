import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBylmfdiFWyO-L7N8m_54sMft9zFpkfvS8",
  authDomain: "react-auth-f9e45.firebaseapp.com",
  projectId: "react-auth-f9e45",
  storageBucket: "react-auth-f9e45.appspot.com",
  messagingSenderId: "644446290106",
  appId: "1:644446290106:web:3b265c2ad87ff91d3ec283",
  measurementId: "G-KJEQEYD9SB"
})

export const auth = app.auth()
export default app
