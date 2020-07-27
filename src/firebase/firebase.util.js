import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

//Import firebase
const config = {
    apiKey: "AIzaSyDTgSlpc_Wq1OWP5VwzKaLClZXw_jvEYEI",
    authDomain: "react-webshop-db.firebaseapp.com",
    databaseURL: "https://react-webshop-db.firebaseio.com",
    projectId: "react-webshop-db",
    storageBucket: "react-webshop-db.appspot.com",
    messagingSenderId: "329938234337",
    appId: "1:329938234337:web:92ca8e73830f39ecdb00a0",
    measurementId: "G-0QSM00C94X"
}

firebase.initializeApp(config);

//Google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//We want a sign-in popup
provider.setCustomParameters({ prompt: 'select_account' });
//We choose the google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

