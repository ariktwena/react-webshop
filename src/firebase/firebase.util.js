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

//We want to sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();
//We want a sign-in popup
provider.setCustomParameters({ prompt: 'select_account' });
//We choose the google popup and get a auth array with the google sign up info
export const signInWithGoogle = () => auth.signInWithPopup(provider);



/**
 *
 * CRUD
 *
 */

//Create user document in the firebase DB from the userAuth object we get from the google sign in
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //We only want to run this function if a user is signed in an got a userAuth from google
    if(!userAuth) return;

    // //Test: we call a user that doesnt exist
    // console.log(firestore.doc('users/hjgfjgksdf'));

    //How to get a snapshot from a database reference, and we can see if the user is in the database via exists true/false
    // const userRef = firestore.doc('users/hjgfjgksdf');
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(userAuth);
    console.log(userRef);
    console.log(snapShot);

    //If the user doesnt exists, we will create the user in the database
    if(!snapShot.exists){

        //The data we want to store in the database from the user
        const { displayName, email } = userAuth;

        //The date we created the data in the database
        const createdAt = new Date();

        //We insert the data via a try/catch
        try {

            //We insert the data we wish in to our user collection/object
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating user: ' + error.message);
        }
    }

    //We always return the userRef
    return userRef;
};






export default firebase;

