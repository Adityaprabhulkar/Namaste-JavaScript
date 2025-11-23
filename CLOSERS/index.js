 


//  function x() {
//     var a = 7;
//     function  y() {
//         console.log(a);
       
//      }
//       a = 100
//       return y;
//  };

// var z = x();
// console.log(z);



function z() {
    var b = 700;
    function x () {
        var a = 7;
        function y() {
            console.log(a, b);
            
        }
        y()
    }
    x()
}
z()

