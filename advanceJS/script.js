// class buiscuitMaker {
//     constructor() {
//         this.name = "Oreo";
//         this.price = 10;
//         this.piece = 5;
//     }
// }   
// let buiscuit = new buiscuitMaker();


// class kitaab {
//     constructor(name, price, author, color) {
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.color = color;
//     }
//     pannaPalto() { }
//     bookmarkLagao() { }
//     padhlo() { }
// }
// class user {
//     constructor() {
//         this.username = "Abir";
//         this.age = 21;
//         this.email = "abir@gmail.com";
//     }
//     khaanakhaao() { }
//     saanslo() { }
// }
// let k1 = new kitaab("Maths", 200, "AbirRM", "blue");
// let k2 = new kitaab("Politics", 279, "modiji", "green");
// let k3 = new kitaab("Nobel Price", 190, "trump", "red");


// let obj = {
//     fnc: function(){
//         function abcd(){
//             console.log(this);

//         }
//         abcd();
//     }
// };
// obj.func();


// let obj = {
//     name: "abir",
// }
// function abcd(a, b, c) {
//     console.log(this, a, b, c);
// }
// let newfnc = abcd.bind(obj, 1, 2, 3);

// newfnc();

// class animal {
//     constructor() {
//         this.legs = 2;
//         this.hands = 2;
//     }

//     eat() { }
//     breathe() { }
// }

// class dog extends animal {
//     constructor() {
//         super();
//         this.breed = "labrador";
//         this.color = "white";
//     }
//     bark() { }
//     susu() { }
// }

// let d1 = new dog();


// let user1 = {
//     name: "Abir",
//     email: "aidiuadui",
//     login: function () {
//         console.log("logged in");
//     }
// }
// user.login();



// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     loggedIn() {
//         console.log("loggedin");
//     }
// }
// let user1 = new user("Abir", "a@a.a");
// let user2 = new user("Brock", "b@b.b");
// let user3 = new user("Cena", "c@c.c");



// let product = {
//     name: "cap",
//     price: 3300,
//     discountedPrice: function(){
//        return this.price - 200;
//     }
// }
// console.log(product.discountedPrice());



// class Car {
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }
// let car1 = new Car("hundai",180);
// let car2 = new Car("Maruti",160);



// class Student {
//     constructor(name, rollnumber){
//         this.name = name
//         this.rollNo = rollnumber
//     }
//     introduce(){
//         return this.name + " " + this.rollNo
//     }
// }
// let student1 = new Student("Abir", 2);
// let student2 = new Student("Aryan", 3);



// function abcd(){
//     console.log(this.name);
// }
// let obj = {
//     name: "harsh",
// };
// abcd.call(obj)



// function abcd(val) {
//     setTimeout(() => {
//         console.log(val);
//     }, Math.floor(Math.random() * 10) * 1000);
// };
// abcd(12)



// function profile(username, cb) {
//     setTimeout(() => {
//         console.log("fetching profile...");
//         cb({ _id: 12220, username, age: 21, email: "a@a.a" })
//     }, 2000);
// }

// function getpost(id, cb) {
//     console.log("fetching all posts...");

//     setTimeout(() => {
//         cb({ _id: id, posts: ["hey", "hello", "hii"] })
//     }, 3000);
// }
// profile("abir", function (data) {
//     console.log(data);
//     getpost(data._id, function (posts) {
//         console.log(posts);
//     });
// });



// let pr = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10)
//         if (rn > 5) res("resolved with " + rn)
//         else rej("rejected with " + rn)
//     }, 1000);
// });
// pr
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (val) {
//         console.log(val);
//     });
// async function abcd() {
//     try {
//         let val = await pr;
//         console.log(val);
//     } catch (err) {
//         console.log(err);
//     }
// }
// abcd()



// fetch("https://randomuser.me/api/")
// .then(function(rawdata){
//     return rawdata.json()
// })
// .then(function(data){
//     console.log(data.results[0].name.first);  
// })
// .catch(function(err){
//     console.log(err);
// })



// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         })
//     });
// }
// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("hehe");

//         })
//     })
// })



// function getdetails(address, cb) {
//     setTimeout(() => {
//         cb({ address: "arun nagar h12"})
//     }, 3000);
// }
// getdetails("ahdah", function (details) {
//     console.log(details);
// })




// function afterdelay(time, cb) {
//     setInterval(() => {
//         cb({});
//     }, time);
// }
// afterdelay(3000, function () {
//     console.log("delay");
// })



// function getUser(username, cb) {
//     console.log("getting user details...");
//     setTimeout(() => {
//         cb({ id: 1, username: "abir" });
//     }, 1000);
// }
// function getUserPosts(id, cb) {
//     console.log("getting user posts...");
//     setTimeout(() => {
//         cb(["hello", "hey", "hiii"]);
//     }, 2000);
// }
// getUser("abir", function (data) {
//     getUserPosts(data.id, function (allpost) {
//         console.log(data.username, allpost);
//     })
// })



// function loginUser(username, cb) {
//     console.log("loggin in user...");
//     setTimeout(() => {
//         cb({ username: "abir", id: 2289 });
//     }, 1000);
// }
// function fetchPermissions(id, cb) {
//     console.log("fetching permissions...");
//     setTimeout(() => {
//         cb(["read", "write", "delete"]);
//     }, 2000);
// }
// function loadDashboard(permissions, cb) {
//     console.log("loading dashboard...");
//     setTimeout(() => {
//         cb()
//     }, 2000);
// }
// loginUser("abir", function (userdata) {
//     fetchPermissions(userdata.id, function (permissions) {
//         loadDashboard(permissions, function () {
//             console.log("Dashboard Loaded");
//         })
//     })
// })




// function placeOrder(foodName, cb){
//     console.log("placing order....");
//     setTimeout(() => {
//         cb({orderID:101, food:foodName});
//     }, 1000);
// }
// function prepareFood(order,cb){
//     console.log("preparing food....");
//     setTimeout(() => {
//         cb({packet:"Packed " + order.food});
//     }, 2000);
// }
// function deliverFood(packet, cb){
//     console.log("delivering food....");
//     setTimeout(() => {
//         cb({"status": "Delivered: " + packet.packet});
//     }, 2000);
// }
// placeOrder("Burger", function(order){
//     prepareFood(order, function(packet){
//         deliverFood(packet, function(status){
//             console.log(status);
//         })
//     })
// })



// function loginSystem(name, cb) {
//     console.log("Loggin in....");
//     setTimeout(() => {
//         cb({ studentID: 1022, name: "Abir" });
//     }, 1000);
// }
// function loadQuestions(studentId, cb) {
//     console.log("Loading Questions....");
//     setTimeout(() => {
//         cb({ questions: "Q1 Q2 Q3"})
//     }, 2000);
// }
// function submitExam(questions, cb) {
//     console.log("Submitting Exam....");
//     setTimeout(() => {
//         cb({ result: "passed" });
//     }, 3000);
// }
// loginSystem("Abir", function (studentID) {
//     console.log("Logged in , Displaying Questions....");
//     loadQuestions(studentID, function (questions) {
//         console.log(questions);
//                 submitExam(questions, function (result) {
//             console.log(result);
//         })
//     })
// })



// let prm = new Promise(function (resolve, reject) {
//     setInterval(() => {
//         resolve();
//     }, 3000);
// })
// prm.then(function () {
//     console.log("Resolved");
// })
//     .catch(function () {
//         console.log("Rejected");
//     })



// fetch(`https://randomuser.me/api/`)
// .then(function(rawdata){
//     return rawdata.json()
// })
// .then(function(data){
//     console.log(data.results[0].name.first);
// })


// async function abcd() {
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();
//     console.log(data);
// }
// abcd();



// function getnum() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10)
//             if (num < 5) {
//                 resolve(true);
//             }
//             else reject(false)
//         }, 3000);
//     })
// }
// async function abcd() {
//     let v = await getnum();
//     console.log(v);
// }
// abcd();



// try{
//     let a = 12
//     console.log(a.name.first);
// }
// catch(err){
//     console.log(err);

// }




//weather dashboard with error handling =>
// async function getWeather(city) {
//     try{
//         let apikey = `d418b209824e73f1495a9aab7a4cf901`;
//     let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//     );
//     if(!raw.ok){
//         throw new Error("error,city not found")
//     }
//     let real = await raw.json();
//     if(real.main.temp < 0){
//         console.warn(`too cold out there... ${real.main.temp}`);
//     }
//     else if(real.main.temp > 40){
//         console.warn(`too hot out there... ${real.main.temp}`);
//     }
//     else{
//         console.log(real);
//     }
//     }
//     catch(err){
//         console.log(err.message);  
//     }
// }
// getWeather("Raipur");



//Email sending system
// const user = [
//     "abir@rockman.com",
//     "harsh@arvik.com",
//     "ameya@ash.com"
// ];
// function sendEmail(email) {
//     return new Promise(function (resolve, reject) {
//         let time = Math.floor(Math.random() * 5)
//         setTimeout(() => {
//             let probability = Math.floor(Math.random() * 10)
//             if (probability <= 5) resolve("Email sent succesfully.");
//             else reject("Email not sent.")
//         }, time * 1000);
//     })
// }
// async function sendEmails(userlist) {
//     let allresponses = userlist.map(function (email) {
//         return sendEmail(email)
//             .then(function (data) {
//                 return data;
//             })
//             .catch(function (err) {
//                 return err;
//             });
//     });
//     let ans = await Promise.all(allresponses)

//     ans.forEach(function (status) {
//         console.log(status);
//     })
// }
// sendEmails(user);



// function debounce(fn, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(fn, delay);
//     };
// }
// document.querySelector("#search").addEventListener(
//     "input",
//     debounce(function(){
//         console.log("chala");
//     },400)
// )