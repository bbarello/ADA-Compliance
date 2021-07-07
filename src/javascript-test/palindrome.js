/* npm install express from this file */

// Declares var isPalindrome as function 
var isPalindrome = function(str){
    var reversedString = str
    .split("")
    .reverse("")
    .joint("");

// Checks if string is empty, if empty returns false
if(isPalindrome === "") {
    //console.log("False");
    return false;
}
// Checks if string is palindrone and returns true
if (reversedString === str){
    return true;

// Else if string is not palindrone returns false
} else {
    return false;
}

};

// Exports Module
module.exports = isPalindrome;