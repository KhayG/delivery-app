import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCbClv43pvf1SGGnixYUByEh8SNlZXjWdk",
    authDomain: "khaygreek-restaurant-app-v1.firebaseapp.com",
    databaseURL: "https://khaygreek-restaurant-app-v1-default-rtdb.firebaseio.com",
    projectId: "khaygreek-restaurant-app-v1",
    storageBucket: "khaygreek-restaurant-app-v1.appspot.com",
    messagingSenderId: "954742699090",
    appId: "1:954742699090:web:3f69a2f88b084085ac1b8b"
};


const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
