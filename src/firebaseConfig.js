import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKHi_hlb6xstZ_cpxPi2WvpxCyB-KRnd0",
    authDomain: "linkedin-clone-c0f10.firebaseapp.com",
    projectId: "linkedin-clone-c0f10",
    storageBucket: "linkedin-clone-c0f10.appspot.com",
    messagingSenderId: "352168403690",
    appId: "1:352168403690:web:6ee4ef7932c20139516d93",     
    measurementId: "G-B9MM8SHBN9"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { 
    db, 
    auth 
}