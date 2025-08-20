//Arithematic Operators
/*let a = 6;
 let b = 4; */

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// Unary Operators
// console.log(++a);
// console.log(a++);
// console.log(a);

//Assignment Operators
// a += 4;
// a -= 4;
// a *= 4;
// a /= 4;
// a %= 4;
// a **= 2;
// console.log(a);

//Comparison Operators
// console.log(a==b);
// console.log(a!=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a !== b);
// console.log(a <= b);

//Logical Operators
// AND
// console.log(a != b && a > b);
// console.log(a != b && a == b);
// console.log(a == b && a > b );
// console.log(a == b && a < b);

//OR
// console.log(a != b || a > b);
// console.log(a != b || a > b);
// console.log(a == b || a > b);
// console.log( a == b || a < b);

//NOT
// console.log(!(a < b));
// console.log(!(a > b));

//Conditional Statements
//if statement

// let age = 10;

// if(age >= 18){
//     console.log("can vote");
// }

// if( age < 18)
// {
//     console.log("cannot vote");

// }

// let mode = "dark"
// let color;

// if(mode == "dark"){
//     color = "black"
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);

//if-else statement

// 

// let age = 25; 

// if(age >= 18) {
//     console.log("can vote");

// } else {
//     console.log("cannot vote");

// }

//odd or even

// let num = 3;

// if( num % 2 === 0) {
//     console.log("even");

// } else {
//     console.log("odd");

// }

//else-if statement 

// let mode = "pink";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if(mode === "pink"){
//     color = "pink";
// } else if (mode === "blue") {
//     color = blue 
// } else {
//     color = "white";
// }
// console.log(color);

//Ternary Operator
// let age = 25;
// age >= 18 ? console.log("adult") : console.log("not adult");
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// alert("Hi")
//  let  num = prompt("Enter number")
// if (num % 5 === 0) {
//     console.log(num,"multiple of 5");

// } else {
//     console.log(num,"not multiple of 5");
//     }

// let score = prompt("Enter your score");
// let grade;
// if (score >= 90 && score <=100){
//     grade = "A";
// } else if (score >= 70 && score <= 89)
//     grade = "B";
// } else if (score >= 60 && score <= 69){
//     grade = "C";
// } else if (score >= 50 && score <= 59){
//     grade = "D";
// } else if (score >= 0 && score <=49){
//     grade = "F";
// }
// console.log("Your grade acc to score", grade);
// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");

// }
// for( let i = 1; i<= 5; i++){
//     console.log("Hi");

// }
//CALCULATE SUM OF 1 TO 5
// let sum = 0;
// let n = 100;
// for (let i = 1; i<= n; i++){
//     sum = sum + i;
// }
// console.log("sum", sum,);

//print 1 to 5
// for(let i = 1; i <=5; i++) {
//     console.log("i =",i);

// }

// console.log(i);

// for(i = 1; i >= 0; i++) {
//     console.log(i);

// }

// let i = 1;
// while (i <=10){
//     console.log("Hi");
//     i++
// }

// let i = 1;
// do {
//     console.log("Hi",i);
//     i++;    
// } while (i<=6);

// let str = "js";
// let size = 0;
// for (let i of str) {
//     console.log("i", i);
//     size++;  
// }
// console.log(size);

// STRING METHODS

//1. length() 
// let i = "ABCEEFGH";
// console.log(i.length);

//2. at()
// let i = "hello";
// console.log(i.at(4));

// []
// let i = "01234567";
// console.log(i[2]);

//3. concat()
// let i = "hello";
// let j = "world";
// console.log(i.concat(" ", j));
// let i = "hello";
// let j = "world";
// console.log("hello" + " " + "world");

// let i = "hello";
// let j = "world";
// console.log(i +" " + j);

//4. slice()
// let i = "happy, kiwi, banana";
// console.log(i.slice(7,11));
// console.log(i.slice(7));

// substring()
// let i = "HELLO WORLD";
// console.log(i.substring(5,6));
// console.log(i.substring(5));
// console.log(i.substring(-5,-6));
// console.log(i.substring(6,5));

//5. toLowerCase()
// console.log(i.toLowerCase());

//6. toUpperCase()
// console.log(i.toUpperCase());

//7. trim()
// console.log(i.trim());

//8. padStart()
// console.log(i.padStart(15, "m"));

// padEnd()
// console.log(i.padEnd(15, "n"));

//9. repeat()
// console.log(i.repeat(5));
// let i = "HELLO WORLD";

//10. replace()
// console.log(i.replace("WORLD","UNIVERSE"));
// console.log(i.replace("WORLD","UNIVERSE"));

// let i = " i like cats. they are cats which they are cats and cute cats";
// console.log(i.replaceAll("cats", "unicorns"));

//11. indexOf(), lastIndexOf()
// let i = "Hello World How Are You Universe World";
// console.log(i.indexOf("World"));
// console.log(i.lastIndexOf("You"));
//console.log(i.lastIndexOf("World"));
//console.log(i.indexOf("World"));

//search()
// console.log(i.search("How"));
// console.log(i.search(/U/));

//12. match()
// console.log();

//13. includes()
// console.log(i.includes("Universe"));

// 14. startsWith(), endsWith()
// console.log(i.startsWith("Hello"));
// console.log(i.endsWith("Universe"));

//15. match(), matchAll()
// let i = "Hello World How Are You Universe World";
// console.log(i.match(/World/));
// for ( let m of i.matchAll(/World/g)){
//     console.log(m);
    
// }

//16. parseInt()
// console.log(parseInt("123"));
// console.log(parseInt("1234px"));
// console.log(parseInt("hello"));

//17. join()
// let a = ["0", "1", "2", "3", "4",]
// console.log(a.join("-"));

//18. toFixed()
// let n = 3.125666;
// console.log(n.toFixed(4));










