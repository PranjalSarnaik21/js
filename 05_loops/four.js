// object iterations
// for in  used  for object iterations

const myObject = {
    js : "javaScript",
    py : "python",
    swift : "swift by apple",
    rb : "ruby"
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);  // js shortcut for javaScript
}
 // example for in - array
 const programming = ["js", "rb","py","java"]
 for (const key in programming) { 
    console.log(`${key} and ${programming[key]}`);
    }
 // we can't use for in for map iteration