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
var fb_uid

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    update,
    query,
    orderByChild,
    limitToFirst,
    onValue
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
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
       fb_uid = result.user.uid;
        console.log(result.user.uid);
        console.log(result);
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

    const dbReference= ref(FB_GAMEDB, ("User/"+ fb_uid));
    var UserInformation = {highScore: 69, Name: "Max"};

    set(dbReference, UserInformation).then(() => {
        console.log("written the following indformation to the database");
        console.log(UserInformation);
    }).catch((error) => {
        console.log("write error");
        console.log(error);
    });
}

function fb_read() {
    const dbReference= ref(FB_GAMEDB,("User/"+ fb_uid));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("successful read")
            console.log(fb_data)
        } else {
            console.log("no record found")
            cosole.log(fb_data)
        }
    }).catch((error) => {
        console.log("Read all error")
        console.log(error)
    });
}

function destroy(){
    FB_GAMEDB  = {
        apiKey: "AIzaSyBA9LF4VKTGLBynVTOiG3iJqm-odKKE74g",
        authDomain: "comp-2025-scott-barlow.firebaseapp.com",
        databaseURL: "https://comp-2025-scott-barlow-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-scott-barlow",
        storageBucket: "comp-2025-scott-barlow.firebasestorage.app",
        messagingSenderId: "604831891804",
        appId: "1:604831891804:web:e1d0c36b49a9ad732b4199",
        measurementId: "G-5JBDKMXH4C"
}
const FB_GAMEAPP = initializeApp(FB_GAMEDB);
FB_GAMEDB  = getDatabase(FB_GAMEAPP);
const dbReference= ref(FB_GAMEDB, "/");
var UserInformation = {Name: " scott is dumb and his fire base is gone"};
 set(dbReference, UserInformation).then(() => {
        console.log("written the following information to the database");
        console.log(UserInformation);
    }).catch((error) => {
        console.log("write error");
        console.log(error);
    });
}
// function read all
function readAll(){
const dbReference= ref(FB_GAMEDB, ("User/"+ fb_uid));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
           console.log("Read all successfully")
        } else {
            console.log("no record read")
        }
    }).catch((error) => {
        console.log("Read all error")
         console.log(error)
    });
}
// function to update database
function fb_update(){
const dbReference= ref(FB_GAMEDB, ("User/"+ fb_uid));
var UserInformation = {highScore: 89, Name: "Max"};
    update(dbReference, UserInformation).then(() => {
        console.log(UserInformation);
        console.log("update successful");
    }).catch((error) => {
    console.log("update error");
    console.log(error);
    });
}
// sorted read function
function sortedRead() {
    var sortKey = "highScore";
    const dbReference= query(ref(FB_GAMEDB, ("User/"+ fb_uid)), orderByChild(sortKey), limitToFirst(10));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("Sorted read successful");
            console.log(fb_data);
        } else {
            console.log("no record found");
            console.log(fb_data);
        }
    }).catch((error) => {
        console.log("Sorted read error");
        console.log(error);
    });
}

function onValueRead() {
    const dbReference = ref(FB_GAMEDB, ("User/" + fb_uid));
    onValue(dbReference, (snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("onValue read successful");
            console.log("" + fb_data);
        } else {
            console.log("no record found");
            console.log(fb_data);
        }
    }, (error) => {
        console.log("onValue read error");
        console.log(error);
    });
    //const dbReference = ref(what-DB, where-to-monitor-&-read-from);
    //onValue(dbReference, (snapshot) => {
        //var fb_data = snapshot.val();
        //if (fb_data != null) {
           // ✅ Code for a successful read goes here
       // } else {
           // ✅ Code for no record found goes here
       // }
   // });
}

export { fb_initialise };
export { fb_authenticate };
export { onAuthStateChange };
export { Signout };
export { fb_writeto };
export { fb_read };
export { readAll };
export { destroy };
export { fb_update };
export { sortedRead };
export { onValueRead };
/**************************************************************/
// END OF CODE
/**************************************************************/

       // apiKey: "AIzaSyCHDtQ5nuCxgp_XCL_RtR7YVHv8mO1rhmc",
       // authDomain: "comp-2025-max-bergman-4bb13.firebaseapp.com",
        //databaseURL: "https://comp-2025-max-bergman-4bb13-default-rtdb.asia-southeast1.firebasedatabase.app",
        //projectId: "comp-2025-max-bergman-4bb13",
       // storageBucket: "comp-2025-max-bergman-4bb13.firebasestorage.app",
       // messagingSenderId: "75891205088",
       // appId: "1:75891205088:web:9ce6dd10fe8f59fb6f8185",
       // measurementId: "G-860HVWZ49V"