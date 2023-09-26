console.log('This shows how to creat function use multiple parameter,what will happen if we dont call the parameter ');
// function login(username,password) {
//     console.log(`${username},Logged in successfully`);
//     console.log(`This is Passcode:${password}`);
// }
// //this is calling parameter 
// login('Parth Trapasiya','sayit');
// login('Neha Nayak','got that');

// function login(username,password) {
//     console.log(`${username},Logged in successfully`);
//     console.log(`This is Passcode:${password}`);
// }
// login('Parth Trapasiya','sayit');
// //we havnt passed the parameter it will give undefine
// login('Neha Nayak');


// function Uppercase(string) {
//         console.log(string.toUpperCase())
//     }
//     Uppercase('javascript');
// //if we need direct result then we can use
// console.log('this how we return the value');
// function Uppercase(string) {
//     return string.toUpperCase();
// }
// const result=Uppercase('javascript');
// console.log(result);


// function calcArea(width,height) {
//     const area=width*height;
//     return area;
// }
// const area=calcArea(30,40);
// console.log(area);

console.log('learn default parameter');
//we add pass parameter maunally because es6
// function calcArea(width,height=2) {
//     const area=width*height;
//     return area;
// }
// const area=calcArea(30);
// console.log(area);



console.log('variable scope');
//In this we had created function by example we want to download some file
// function download(params) {
//     const filename='xyz.pdf';
//     console.log(filename);
// }
// download()

// //in this it will not run variable cannot be accessed outside the function
// function download(params) {
//     const filename='xyz.pdf';
// }
// download() 
// console.log(filename);

// //bahar ka variable(filename) andar access kar skte ho(console.log(filename)) this code will work
// const filename='xyz.pdf';

// function download(params) {
//     console.log(filename)
// }
// download()


console.log('function declaration and function expression');

// //this is function declaration
// function login(params) {
    
// }
//this is function expression,anonymous function:-function without name
// anonymous function(function(){}) has been store in variable(const) this know as func expression 
// const login=function(){

// }
//this will work same in js, we can pass function as parameter
// const login=function(){
//     console.log('logged in');
// }
// login() 


console.log('Call Back');
//in this we can pass function as parameter

// function formatText(text,format) {
//     return typeof format ==='function'?format(text):text.toUpperCase();
// }
// const result= formatText('hello', function(text){
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

console.log("IIFE Immediately invoke function expression");
// (function () {
//     console.log("setup done");
// })();

console.log("Arrow function");

// const sum = (num1,num2) =>{
//     return num1+num2;
// }
// const result = sum(4,5);
// console.log(result);

//one linear
// const sum = (num1,num2) =>num1+num2;

// const result = sum(4,5);
// console.log(result);

// function formatText(text,format) {
//     return typeof format ==='function'?format(text):text.toUpperCase();
// }
// const result= formatText('hello', (text)=> text.charAt(0).toUpperCase() + text.slice(1));
// console.log(result);



