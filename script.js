// strict mode forbids us to do certain things and js would allow us to fail silently 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive`);
