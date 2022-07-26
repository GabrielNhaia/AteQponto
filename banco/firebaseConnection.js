// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getDatabase } from "firebase/database";
import database from 'firebase/compat/database'
import analytics from "firebase/analytics";
import 'firebase/compat/firestore';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSQOLouUrM4TBhIF4d5lca1LtR6fJu1G8",
  authDomain: "ateqponto-a17b0.firebaseapp.com",
  projectId: "ateqponto-a17b0",
  storageBucket: "ateqponto-a17b0.appspot.com",
  messagingSenderId: "541625644275",
  appId: "1:541625644275:web:82a4e7407a4ae9df2b3386",
  measurementId: "G-0SNYCY58TL"

};

{
  
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const database = getDatabase(app);
  //analytics = getAnalytics(app);
  
}
// const database = getDatabase(app);
// return database; 

export default db;
//export default analytics;
//const app =