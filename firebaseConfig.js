import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {

  apiKey: "AIzaSyCjUeRzubsVYOQsQJ7Ivu4ZN0VmdC-Ad-E",

  authDomain: "fir-ca09f.firebaseapp.com",

  projectId: "fir-ca09f",

  storageBucket: "fir-ca09f.appspot.com",

  messagingSenderId: "21866214186",

  appId: "1:21866214186:web:bd5a1541e41bc5af366453",

  measurementId: "G-GGYPB3D9B0"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
