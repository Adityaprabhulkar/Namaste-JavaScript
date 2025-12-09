// console.log("Start");

// document.getElementById("btn").addEventListener("click" , function cb() {
//     console.log("callback");
// });

// console.log("end");


console.log("start");

setTimeout(function cbt() {
    console.log("CB timeout");
    
},5000)

fetch("https://www.google.com")
.then(function cbf() {
    console.log("cb google");
})

// console.log("end");..........


