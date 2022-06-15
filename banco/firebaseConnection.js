// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import analytics from "firebase/analytics";
import {getDatabase} from'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQOLouUrM4TBhIF4d5lca1LtR6fJu1G8",
  authDomain: "ateqponto-a17b0.firebaseapp.com",
  projectId: "ateqponto-a17b0",
  storageBucket: "ateqponto-a17b0.appspot.com",
  messagingSenderId: "541625644275",
  appId: "1:541625644275:web:82a4e7407a4ae9df2b3386",
  measurementId: "G-0SNYCY58TL"
};

// Initialize Firebase  
//if(!firebase.apps.length)

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    //analytics = getAnalytics(app);

export default db;
//export default analytics;
//const app = 