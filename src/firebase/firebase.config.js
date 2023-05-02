import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwUYOIwXKlJZewEix1sixTW-zp6KjvMco",
  authDomain: "italian-recipes-ac2fe.firebaseapp.com",
  projectId: "italian-recipes-ac2fe",
  storageBucket: "italian-recipes-ac2fe.appspot.com",
  messagingSenderId: "309178708115",
  appId: "1:309178708115:web:6a24f9dc7431c455cddd66"
};

const app = initializeApp(firebaseConfig);
export default app;