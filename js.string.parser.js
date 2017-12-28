/*
MEthod in JS developed by Felipe Alfonso Gonzalez 
Software Engineer / Developer. 


*/

var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
var contact = JSON.parse(jsontext);


var str = JSON.stringify(arr); 
// using the argument of stringify in the return of the object
// finishing the obect.



JSON.safeparse = function (input, def) {
    // Convert null to empty object
    
    
    if (!input) {
        return def || []; 
    
    } else if (Object.prototype.toString.call(input) === '[object Object]') {
        return input; 
    }
    try {
        return JSON.parse(input); 

    } catch (e) {
        return def || {};
}

};