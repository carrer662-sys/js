//for loop
// let a = [10, 20, 30, 40, 50];
// for ( let i = 0; i < a.length; i++) {
//     console.log(a[i]);
    
// }
//for of 
// for (let b of a) {
//     console.log(b);
    
// }

// let marks = [22, 33, 34, 55, 32, 64, 44];
// let sum = 0;
// for(let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(avg);

// let items = [22, 55, 56, 66, 566, 787, 775];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//      items[i] -= offer;
// }
// console.log(items);

//functions

// function add(a, b) {
//     return a + b;
// }

// console.log(add(4, 3));

// function sub(b, c) {
//     return b - c;
// }
// console.log(sub(5, 2));

// let x = (a, b) => {
//     return a - b;
// }
// console.log(x(10, 4));

// let x = (a, b) => {
//     return a * b;
// }
// console.log(x(5, 2));

// const myObject = {
//     firstName: "Fatima",
//     lastName: "Ahmed",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());

// const obj = {
//     fname: "fatima",
//     lname: "ahmed",
//     fn: function () {
//         return this.fname + " " + this.lname;
//     }
// } 
// console.log(obj.fn());

// let x = this;
// console.log(x);

// const person = {
//     fn: function () {
//         return this.fname + " " + this.lname;
//     }
// }

// const person1 = {
//     fname: "fatima",
//     lname: "ahmed"
// }
//  const person2 = {
//     fname: "barbie",
//     lname: "roberts"
//  }
//  console.log(person.fn.call(person2));
 
// const person  = {
//     fln: function (city, country) {
//         return this.fname + " " + this.lname + "," + city + "," + country;
//     }
// }
// const person1 = {
//     fname: "fatima", 
//     lname: "ahmed"
// }
// console.log(person.fln.call(person1, "hyd", "india"));

// const person = {
//     fn: function () {
//         return this.fname + " " + this.lname;
//     }
// }  

// const person1 = {
//     fname: "fatima",
//     lname: "ahmed"
// }
// console.log(person.fn.apply(person1));

// const person = {
//     fname: "barbie",
//     lname: "roberts",
//         fln: function (city, country) {
//         return this.fname + " " + this.lname + "," + city + "," + "country";
//     }
// }

// const person1 = {
//   fname: "fatima",
//   lname: "ahmed"
// }

// console.log(person.fn.apply(person1, ["hyderabad", "india"]));

// const person = {
//     fname: "barbie",
//     lname: "roberts",
//         fln: function (city, country) {
//         return this.fname + " " + this.lname + "," + city + "," + "country";
//     }
// }

// const person1 = {
//   fname: "fatima",
//   lname: "ahmed"
// }
// let fln = person.fln.bind(person1, ["hyd", "india"]);
// console.log(fln());

// const person = {
//     fn: "fatima",
//     ln: "ahmed",
//     display : function () {
//         console.log(this.fn + " " + this.ln);
        
//     }
// }
// setTimeout(function() {
//     person.display();
// }, 3000);

// let arrow = (a, b) => {
//     return a * b;
// }
// console.log(arrow(5, 3));

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         )
//         count++;
//     }
//     return count;
// }
// console.log(countVowels("hello"));




