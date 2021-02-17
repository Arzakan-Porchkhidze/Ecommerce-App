import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDijv2njb50F4F0FGzpkMooLTwqka_DU8w",
  authDomain: "crwn-db-72c67.firebaseapp.com",
  projectId: "crwn-db-72c67",
  storageBucket: "crwn-db-72c67.appspot.com",
  messagingSenderId: "296567243565",
  appId: "1:296567243565:web:05e58945e9e0dfec9509a4",
  measurementId: "G-GNJW6VKJM0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;