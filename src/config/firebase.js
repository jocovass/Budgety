// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

const app = firebase.initializeApp(config);
const db = app.firestore();

// var docRef = db.collection('users').doc('joco');

// var getOptions = {
//     source: 'default',
// };

// docRef.get(getOptions).then((doc) => {
//     // if(doc.exists) {
//         console.log('Cached document data:', doc.data());
//     // } else {
//     //     console.log('No such document!');
//     // }
// }).catch((error) => {
//     console.log('Error getting cached document:', error);
// })

export { app, db };