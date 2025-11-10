var a = 10;
function b() {
    var x = 10;
}

// console.log(window.a);   window === this / this is keyword
console.log(this.a);   // also doing same work
console.log(a);      //shortest programe is js
// console.log(x);  this log throwing uncaught error bcoz x is not in global space

