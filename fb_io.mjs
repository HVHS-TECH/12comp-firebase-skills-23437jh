//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_

// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
    
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs', 'color: blue; background-color: white;');
var FB_GAMEDB;

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

function fb_initialise() {

    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCtqOoxnHxsj7vs-AfrD8vo-20mA5Sq17A",
        authDomain: "comp-2025-joseph.firebaseapp.com",
        databaseURL: "https://comp-2025-joseph-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-joseph",
        storageBucket: "comp-2025-joseph.firebasestorage.app",
        messagingSenderId: "85501129840",
        appId: "1:85501129840:web:79c64e1947643f22bc70b5",
        measurementId: "G-BEE5KXTKTT"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB);     
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}
function fb_authenticate(){
    console.log('%c fb_authenticate(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        //✅ Code for a successful authentication goes here
        console.log("Authentication successful");
    })
    .catch((error) => {
        //❌ Code for an authentication error goes here
        console.log("Authentication unsuccessful");
        console.log(error);
    });
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

}

function onAuthStateChange(){
    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {

        if (user) {
            console.log("user logged in");
            console.log(user);
        } else {
            console.log("user logged out");
        }
    }, (error) => {
        console.log("error happened");
            console.log(error);
    });
}

function Signout(){
    const AUTH = getAuth();

    signOut(AUTH).then(() => {
        console.log("logout successful")
    })
    .catch((error) => {
        console.log("logout error")
        console.log(error)
    });
}

function fb_writeto() {

    const dbReference= ref(FB_GAMEDB, "User/UserID");
    var UserInformation = {highscore: 69, Name: "Max"};

    set(dbReference, UserInformation).then(() => {
        console.log("written the following indformation to the database");
        console.log(UserInformation);
    }).catch((error) => {
        console.log("write error");
        console.log(error);
    });
}

function fb_read() {
    const dbReference= ref(FB_GAMEDB,"User/UserID");
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            concole.log("successful read")
            concole.log(fb_data)
        } else {
            concole.log("no record found")
            concole.log(fb_data)
        }
    }).catch((error) => {
        concole.log("Read all error")
        concole.log(error)
    });
}

export { fb_initialise };
export { fb_authenticate };
export { onAuthStateChange };
export { Signout };
export { fb_writeto };
export { fb_read };
/**************************************************************/
// END OF CODE
/**************************************************************/