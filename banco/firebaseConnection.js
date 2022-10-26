import { initializeApp,firebase } from "firebase/app";
import 'firebase/firestore';
import { getDatabase } from "firebase/database";
import {firestore} from '@react-native-firebase/firestore';
// import * as firebaseConnection from '../banco';
import '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQOLouUrM4TBhIF4d5lca1LtR6fJu1G8",
  authDomain: "ateqponto-a17b0.firebaseapp.com",
  databaseURL: "https://ateqponto-a17b0-default-rtdb.firebaseio.com",
  projectId: "ateqponto-a17b0",
  storageBucket: "ateqponto-a17b0.appspot.com",
  messagingSenderId: "541625644275",
  appId: "1:541625644275:web:82a4e7407a4ae9df2b3386",
  measurementId: "G-0SNYCY58TL"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// export const usuario =  firestore().collection('Usuario').get();
// export const Usuario = firestore.firestore().collection('Usuario');


export {app};