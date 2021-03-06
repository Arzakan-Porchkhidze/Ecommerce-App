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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {items, title} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection; 
    return accumulator;
  },{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;