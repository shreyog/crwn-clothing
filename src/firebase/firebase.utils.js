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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
