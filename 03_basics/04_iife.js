// Immedetialy Invoke Function Expressions (iife)
// It used to avoid the polution cause by global scopes variables.(The variables are declared globally so it has chances to manipulate the block code)

(function chai(){   // named iife
    console.log("DB connected");   
}) (); // DB connected

(() => {
    console.log("DB2 Connected");   
})();

((name) => {
    console.log({name}); 
}) ("Pranjal");  // { name: 'Pranjal' }