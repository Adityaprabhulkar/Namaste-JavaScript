

// let a = 100;   // global scope
// {
// // compound statement
// var b = 20;   
// let a = 10;
// const c = 30;

// console.log(b);
// console.log(a);
// console.log(c);

// }

// console.log(b);
// console.log(a);    //  a & b in blocked scope   now a shasdowing happend
// console.log(c);    // 

let a = 10;

{
    // let a = 20;
    {
    //    let a = 30;
        console.log(a);     // lexical scope
        
    }
}