import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

console.log("API Key:", process.env.REACT_APP_API_KEY);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_Auth_Domain,
  databaseURL: process.env.REACT_APP_Database_URL,
  projectId: process.env.REACT_APP_Project_ID,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_Sender_ID,
  appId: process.env.REACT_APP_App_ID,
  measurementId: process.env.REACT_APP_Measurement_ID,
};

initializeApp(firebaseConfig);
export const db = getDatabase();
