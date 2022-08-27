import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRr35Zt7OTz5SgCcQ17E8XieUxizEI1Sg",
    authDomain: "acc-core-website.firebaseapp.com",
    projectId: "acc-core-website",
    storageBucket: "acc-core-website.appspot.com",
    messagingSenderId: "260257606031",
    appId: "1:260257606031:web:64b81ab0a87991371143fa"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);