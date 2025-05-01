//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
const firebaseConfig = {
    apiKey: "AIzaSyCtqOoxnHxsj7vs-AfrD8vo-20mA5Sq17A",
    authDomain: "comp-2025-joseph.firebaseapp.com",
    databaseURL: "https://comp-2025-joseph-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-2025-joseph",
    storageBucket: "comp-2025-joseph.firebasestorage.app",
    messagingSenderId: "85501129840",
    appId: "1:85501129840:web:79c64e1947643f22bc70b5",
    measurementId: "G-BEE5KXTKTT"
  };
const FB_GAMEAPP = initializeApp(firebaseConfig);
  FB_GAMEDB  = getDatabase(FB_GAMEAPP);
  console.info(FB_GAMEDB);     
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
    
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');

}


/**************************************************************/
// END OF CODE
/**************************************************************/