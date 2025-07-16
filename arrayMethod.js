// let fruits=["apple","banana"];
// fruits.push("mango");
// console.log(fruits);

// let fruits=["apple","banana","Grapes"];
// fruits.pop();
// console.log(fruits);

// let arr=[2,20,34,5,12,9,4];
// let a = arr.map((value,index)=>{
//     // console.log(value,index);
//     return value+index;
// })
// console.log(a)

// let arr=[2,23,43,3,45,6,7,10];
// let a = arr.filter((value)=>{
//     return value<10;
// })
// console.log(a);

let arr=[4,32,21,34];
let a=((h1,h2)=>{
    return h1+h2;
})
let c = arr.reduce(a);
console.log(c);

