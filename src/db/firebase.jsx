import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey:process.env.REACT_APP_VITE_API_KEY,
    authDomain:process.env.REACT_APP_VITE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_VITE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_VITE_STORAGE,
    messagingSenderId: process.env.REACT_APP_VITE_SENDER_ID,
    appId: process.env.REACT_APP_VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);