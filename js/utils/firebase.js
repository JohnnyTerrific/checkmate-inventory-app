import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdNoC5xt3zkMpB5YNmx2spRsiBMiJl5Uo",
  authDomain: "checkmate-enova.firebaseapp.com",
  projectId: "checkmate-enova",
  storageBucket: "checkmate-enova.firebasestorage.app",
  messagingSenderId: "1036780232884",
  appId: "1:1036780232884:web:689229ef07859db22e77e1"
};

// Prevent duplicate initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };