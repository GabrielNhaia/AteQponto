/*// Import the functions you need from the SDKs you need
import { getDatabase, ref, set  } from "firebase/database";
//import {getFirestore} from "firebase/firestore";
import { initializeApp, applicationDefault, cert } from 'firebase/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase/firestore';
import database from 'firebase/compat/database'
import analytics from "firebase/analytics";
//import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
//import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

//import 'firebase/compat/firestore';

// import 'firebase/database';
*/
//import firebase from 'firebase/app';
//import { initializeApp, firebase } from "firebase/app";
//import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDSQOLouUrM4TBhIF4d5lca1LtR6fJu1G8",
  authDomain: "ateqponto-a17b0.firebaseapp.com",
  projectId: "ateqponto-a17b0",
  storageBucket: "ateqponto-a17b0.appspot.com",
  messagingSenderId: "541625644275",
  appId: "1:541625644275:web:82a4e7407a4ae9df2b3386",
  measurementId: "G-0SNYCY58TL"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 /* if(firebase.app.lenght == 0)
 { 
 
   Firebase = firebase.initializeApp(firebaseConfig);
}
*/
   // const app = initializeApp(firebaseConfig);
  //const Firebase = initializeApp(firebaseConfig);
  //const database = getDatabase(app);
  //analytics = getAnalytics(app);
  

// const database = getDatabase(app);
// return database; 

export default db;
//export default analytics;
//const app =a