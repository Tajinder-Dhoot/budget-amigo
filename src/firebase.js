// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { firebaseConfig } from './firebase.config.json'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// read config data from file
// const configData = require('./firebase.config.json');ssss

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrZmqRbPxvJfciy_DhVAgc9wWyeHp2kJM",
  authDomain: "budget-amigo-ff8d9.firebaseapp.com",
  projectId: "budget-amigo-ff8d9",
  storageBucket: "budget-amigo-ff8d9.appspot.com",
  messagingSenderId: "992973994617",
  appId: "1:992973994617:web:b172cf17e5dd70fb8bf2a8",
  measurementId: "G-M9KXVLKKRE"
};

// const firebaseConfig = {
//   apiKey: configData['apiKey'],
//   authDomain: configData['authDomain'],
//   projectId: configData['projectId'],
//   storageBucket: configData['storageBucket'],
//   messagingSenderId: configData['messagingSenderId'],
//   appId: configData['appId'],
//   measurementId: configData['measurementId']
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log('firebase initialized successfully')

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

export default db;