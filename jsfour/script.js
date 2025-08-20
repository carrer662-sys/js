//for loop
// for ( i= 1; i <= 5; i++){
//     console.log("Hi");
    
// }

// let i = 1; 
// while (i <= 5 ) {
//     console.log("while loop");
//     i++;

// }

//Grade Calculator
// let score = 50;
// let grade;
// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score <= 89) {
//     grade = "B";
// } else if (score >= 70 && score <= 79){
//     grade = "C";
// } else if (score >= 0 && score <= 69 ) {
//     grade = "E";  
// } else {
//     console.log("Not a correct value");
    
// }
// console.log(grade);

// let a = 5;
// let b = 4;
// console.log(a+b);

// function greet(name) {
//     console.log("Hello " + name);
    
// }
// greet("Fatima")

// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

// function double(num) {
//     return num * 2;
// }
//  let result = double(5)

// let name = "Fatima";
// console.log(`Hello ${name}`);
// console.log("Hi " + name);

//LOOPS 
// for (let i = 1; i <=5; i++) {
//     console.log(i);
    
// }
// let j = 1;
// while (j <= 7) {
//     console.log(j);
//     j++;
// }

// let k = 12;
// do {
//     console.log("oink");
// k++;    
// } while (k <= 10);

// let m = 1;
// do {
//     console.log("peekaboo");
//     m++;
    
// } while (m <= 5);

//for loop 
// for (let i = 1; i<= 8; i++){
//     console.log(i);
    
// }
// let j = 1;
// while (j <= 4) {
//     console.log(j);
//     j++;
    
// }
// let k = 12;
// do {
//     console.log(k);
//     k++;
// } while ( k <= 5);

// let str = "Hello";
// let size = 0;
// for ( let val of str) {
//     console.log(val);
//     size++;
    
// }
// let strr = "Hi";
// for ( let varr of strr) {
//     console.log(varr);
// }

// let strrr = "skibidi";
// let sixe = 0; 
// for ( let varrr of strrr) {
//     console.log(varrr);
//     sixe++;
// }
// console.log(size);

// const student = {
//     name: "fatima",
//     age: 18,
//     class: "be",
//     college: "mj"
// };
// for (let key in student) 

//     {
//         console.log( key, student[key]);
        
//     }

// for loop

// for ( let i = 0; i <= 5; i++) {
//     console.log(i);
    
// }

//while loop

// let i = 0; 
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do while 

// let i = 0;
// do {
//     console.log(i);
//     i++
    
// } while(i <= 5);

// for of loop
// let str = "hi";
// let s = 0;
// for (let varr of str){
//     console.log(varr);
//     s++;
// }
// console.log(s);

// // for in loop
// let str = "hi";
// for (let v in str){
//     console.log(v);
    
// }
// const student = {
//     name: "faya",
//     age: 18,
//     cgpa: 9.0,
//     isPass: true
// } 
// for (let key in student) {
//     console.log(key, student[key]);
    
// }

//1Q
// for (let i = 1; i <= 100; i++) {
//        console.log(i);
//     if ( i % 2 !== 0) {
//         console.log(i);
        
//     }
    
// }

//2Q

// let gameNo = 7;
// let userNo = 8;
// while (userNo !== gameNo) {
//    console.log("wrong");
//  userNo = 7;
// }
// console.log("right");

// let str = "abcd";
// str = str.toUpperCase()
// console.log(str);

// let upp = "efgh";
// let t = upp.toUpperCase()
// console.log(upp);
// console.log(t);

// let a = "ABCDEFGH";
// let b = "Fatima";
// console.log(`Hi ${a} and \n ${b}`);
// console.log(a.slice(1, 4));
// console.log(a.concat(b));
// console.log(a.search("C"));
// console.log(a.replace("C", "s"));
// console.log(a.charAt(0));
// let fname = "fayaforcode";
// let username = "@" + fname + fname.length;
// console.log(username);

//arrays

// let marks = [10, 20,30, 40];
// marks[1] = 66;
// console.log(marks);
// console.log(marks[1]);

//for loop
// let marks = [10, 20, 30, 40, 50];
// for( let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);    
// }

//for of loop

// let countries= ["india", "china", "pak", "ksa", "usa"];
// for ( let country of countries) {
//     console.log(country);
    
// }

// let marks = [10, 20, 30, 40];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks ${avg}`);

// let items = [234, 555, 333, 545, 433];
// let i = 0;
// for (let val of items) {
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     console.log(`after offer ${items}`);
//     i++;
// }

// let items = [223, 443, 444, 665, 435];
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

let itemss = ["A", "B", "C", "D"]
let itemsq = ["E", "F", "G", "H"]
let itemsa = ["I", "J", "K", "L"]
// items.push("E");
// console.log(items);
// let deleted = items.pop();
// console.log(deleted);
// console.log(items.toString());
// let items = itemss.concat(itemsq, itemsa);
// console.log(items);
// itemsa.unshift("f");
// let val =itemsa.shift();
// console.log(itemsa);
// console.log(val);
//  let f = itemsa.slice(1,4);
// console.log(f);

// itemsa.splice(1,2,22,22);
// console.log(itemsa);

let comp = [ "ama", "micro", "google", "ibm"]
comp.shift(0)
comp.splice(2,1, "ola")
comp.push("amazon")
console.log(comp);







