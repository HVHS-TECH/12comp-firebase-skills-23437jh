/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise  = fb_initialise;

import { fb_authenticate }
    from './fb_io.mjs';
    window.fb_authenticate  = fb_authenticate;
    
import { onAuthStateChange }
    from './fb_io.mjs';
    window.onAuthStateChange  = onAuthStateChange;
    
import { Signout }
    from './fb_io.mjs';
    window.Signout = Signout;
    
import { fb_writeto }
    from './fb_io.mjs';
    window.fb_writeto = fb_writeto;

import { fb_read }
    from './fb_io.mjs';
    window.fb_read = fb_read;

import { destroy }
    from './fb_io.mjs';
    window.destroy = destroy;

import { readAll }
    from './fb_io.mjs';
    window.readAll = readAll;

import { fb_update }
    from './fb_io.mjs';
    window.fb_update = fb_update;

import { sortedRead }
    from './fb_io.mjs';
    window.sortedRead = sortedRead;

import { onValueRead }
    from './fb_io.mjs';
    window.onValueRead = onValueRead;

    /**************************************************************/
    //import { 
    //fb_initialise,
   // fb_authenticate,
    //onAuthStateChange,
   // Signout,
   // fb_writeto,
   // fb_read,
   // destroy,
   // readAll
//} from './fb_io.mjs';

//window.fb_initialise = fb_initialise;
//window.fb_authenticate = fb_authenticate;
//window.onAuthStateChange = onAuthStateChange;
//window.Signout = Signout;
//window.fb_writeto = fb_writeto;
//window.fb_read = fb_read;
//window.destroy = destroy;
//window.readAll = readAll;
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
