// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("X");
//     y()
// };

// x(function y() {
//     console.log("y");
// });


// Deep about event listener

function attachEventListener() {
    var count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
})
}
attachEventListener();