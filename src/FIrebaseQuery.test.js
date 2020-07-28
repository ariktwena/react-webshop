import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

//We want the "users" collection
firestore.collection('users');

//We want the "users" collection with the user id tt8giyud67c5cT4Gwuu1
firestore.collection('users').doc('tt8giyud67c5cT4Gwuu1');

//We want the "users" collection with the user id tt8giyud67c5cT4Gwuu1, and the "cartItem" collection for that user
firestore.collection('users').doc('tt8giyud67c5cT4Gwuu1').collection('cartItems');

//We want the "users" collection with the user id tt8giyud67c5cT4Gwuu1, and the "cartItem" collection for that user, that has the cartItem id 5zBB4txtbhdsztcFSVHy
firestore.collection('users').doc('tt8giyud67c5cT4Gwuu1').collection('cartItems').doc('5zBB4txtbhdsztcFSVHy');

//We can also do like this with collection and document
firestore.collection('/users/tt8giyud67c5cT4Gwuu1/cartItems');
firestore.doc('/users/tt8giyud67c5cT4Gwuu1/cartItems/5zBB4txtbhdsztcFSVHy');

