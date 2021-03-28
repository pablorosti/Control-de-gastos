import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDqO9MYm7BYbkNQD636IIdQiEK05J2ZHY0",
  authDomain: "gastos-a3d2c.firebaseapp.com",
  projectId: "gastos-a3d2c",
  storageBucket: "gastos-a3d2c.appspot.com",
  messagingSenderId: "509153462619",
  appId: "1:509153462619:web:5af79ac9a8cece504c727e"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
export const auth = fb.auth();
