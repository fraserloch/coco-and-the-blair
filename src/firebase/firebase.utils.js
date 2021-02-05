import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyApbrl4Uc21bNftVDitWWMuM7x5AMLMA_Q",
   authDomain: "coco-and-the-blair.firebaseapp.com",
   projectId: "coco-and-the-blair",
   storageBucket: "coco-and-the-blair.appspot.com",
   messagingSenderId: "1003013403100",
   appId: "1:1003013403100:web:e5b518dbe5ade6e76e5f19",
   measurementId: "G-DEWMQVM7FW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.log("error creating user: ", error.message);
      }
   }

   return userRef;
}

export default firebase; 