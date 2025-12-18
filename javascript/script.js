// let age = prompt("Enter your Number");

// if (age === null){
//     console.error("you have cancelled it");
// }
// else{
//     if(age.trim() === ""){
//         console.error("please write properly");
//     } else {
//         age = Number(age.trim());
//         if(isNaN(age)){
//             console.error("please enter a number");
//         } else {
//             if (age < 0){
//                 console.error("not valid");
//             } else if (age>=18) {
//                 console.log("you can vote");
//             } else {
//                 console.log("you can't vote");
//             }
//         }
//     }
// }



// let count = 0

// for(let i = 1; i < 16; i++){
//     if(i > 8){
//         count++
//     }
// }
// console.log(count);



// let password = "abirheh"
// let pass = prompt("password batao");
// if(pass === null){
//     console.error("cancelled");
// }
// else{
//     if(pass === password){
//         console.log("matched");
//     }
//     else{
//         console.log("not matched");
//     }
// }


// let attempt = 0 
// let password = "abir";
// let pass = prompt("enter password");

// while(pass !== password){
//     if(attempt === 3){
//         console.error("account locked");
//         break;
//     } 
//     pass = prompt("enter password");
//     attempt++;
// }
// if (pass === password){
//     console.log("done");
// }


// let word = prompt("word batao");
// let counter = 0;

// while(word !== "stop"){
//     if(word === "yes") counter++;
//     word = prompt("word batao");
// }
// console.log(`total time yes said : ${counter}`);


// for(let i = 1; i<51; i++) {
//     if (i % 7 === 0){
//         console.log(i);
//     }
// }


// let sum = 0;
// for(let i = 1; i<31; i++) {
//     if (i % 2 !== 0){
//         sum = sum + i;  
//     }
// }
// console.log(sum);



// let num = prompt("give even number");
// num = Number(num);

// while(num % 2 !== 0){
// num = prompt("give even number");
// num = Number(num);   
// }


// let start = +prompt("start");
// let end = +prompt("end");

// if (start>end) console.error("start cant be bigger than end")

// for(let i = start; i<=end; i++){
//     console.log(i)
// }



// let balance = 1000;
// let flag = false
// let counter = 0;

// while (balance>0 && counter !== 3) {
//     let withdraw = +prompt("tell amountto withdraw");
//     counter++;
//     if (withdraw <= balance) balance -= withdraw;
//     else{
//         flag = true;
//         break;
//     }
// }

// if (flag === true){
//     console.error("insuffient balance")
// }
// console.log(`balance : ${balance}`)


// function add(a, b){
//     return a + b;
// }
// let ans = add(11, 2);
// console.log(ans);


// function greeting(guest = "guest"){
//     console.log(`hello ${guest}`)
// }
// greeting("Abir");


// function rest(...num){
//     let sum = 0
//     num.forEach(function (val){
//         sum = sum+val
//     })
//     console.log(sum);
// }

// rest(1,2,3,4,5,6);


// let arr = ["apple","banana","guavava"];
// arr.push("pear");
// arr.unshift("orange");


// function bmi(weight, height){
//     return weight / (height*height);
// }
// console.log(bmi(58, 1.6).toFixed(2));


// function discountcalculator(discount){
//     return function(price){
//         return price - price * (discount / 100);
//     };
// }
// let discounter = discountcalculator(10);
// console.log(discounter(200));


// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map (function(val) {
//     return val*val;
// })
// console.log(newarr);


// let salary = [1000, 2000, 3000];
// let ans = salary.reduce(function(acc, val){
//     return acc+val;
// }, 0)

var hi = document.querySelector('h1')
hi.addEventListner('click', function(){
    console.log('wow ji cute');
})
