import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword, 
        onAuthStateChanged}
from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjF8MjFAu-O5KdzrBtAGAEP76A7RFmlO4",
    authDomain: "jmts-5302b.firebaseapp.com",
    databaseURL: "https://jmts-5302b-default-rtdb.firebaseio.com",
    projectId: "jmts-5302b",
    storageBucket: "jmts-5302b.appspot.com",
    messagingSenderId: "840077609832",
    appId: "1:840077609832:web:f85f6c349b2962903264dd",
    measurementId: "G-DE76EW0T2P"
};

// Initialize Firebase and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // tk org getAuth().

export function signIn() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed in
                var user = userCredential.user;
                console.log('User signed in:', user);
            })
            .catch((error) => {
                // Handle errors
                var errorCode = error.code;
                var errorMessage = error.message;

                console.error('Sign-in error:', errorMessage);
            });
}

//onAuthStateChanged((user) => {
//    if (user) {
//        // User is signed in
//        console.log('User is signed in:', user);
//    } else {
//        // User is signed out
//        console.log('User is signed out');
//    }
//});






/*
 var x = document.getElementById("m-navbar");
 x.style.display = "none";
 
 function show(){
 var x = document.getElementById("m-navbar");
 if (x.style.display === "none"){
 x.style.display = "block";
 } else {
 x.style.display = "none";
 }
 }
 */
// console.log('Yes!!');