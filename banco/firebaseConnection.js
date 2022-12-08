
import { initializeApp , firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'firebase/firestore';
import '@firebase/firestore';

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

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {app};
