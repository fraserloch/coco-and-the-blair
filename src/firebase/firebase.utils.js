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
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase; 