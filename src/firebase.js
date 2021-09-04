// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBTi60ZyezecAdVa9uVb2hUNkTv3ZrxIV8",
  authDomain: "whatsapp-clone-caa2e.firebaseapp.com",
  projectId: "whatsapp-clone-caa2e",
  storageBucket: "whatsapp-clone-caa2e.appspot.com",
  messagingSenderId: "556231593918",
  appId: "1:556231593918:web:7d065393043cf46cd373ef",
  measurementId: "G-3PNHWGS2DB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
