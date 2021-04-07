import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjfv-UCkx0zqDVCLv5S9IjKbcpvFVb8tc",
  authDomain: "crwn-db-1cc4c.firebaseapp.com",
  projectId: "crwn-db-1cc4c",
  storageBucket: "crwn-db-1cc4c.appspot.com",
  messagingSenderId: "1047204130006",
  appId: "1:1047204130006:web:3e37d4db59b9b0cf41ed77",
  measurementId: "G-LTKW7D8YDL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
