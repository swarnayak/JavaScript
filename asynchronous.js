 //asynchronous doesnt block the code, setTimeout is an asynchronous function
 console.log('hello')
 function gretting() {
    console.log('i am set timeout')
 }
 setTimeout (gretting, 3000)
 console.log('javascript')


console.log('callbacks');
 //Callbacks learn with example

//  //add function which says it will dispaly after 3 sec ,this is synchronous 
//  function waitforthreeseconds() {
//     let ms=3000+new Date().getTime();
//     while(new Date()<ms){}
//  }
//  function register() {
//     waitforthreeseconds();//call the waitforthreeseconds ,its an network request
//     console.log('register end');
//  }
//  function sendEmail() {
//     waitforthreeseconds();//call the waitforthreeseconds
//     console.log('email end');   
//  }
//  function Login() {
//     waitforthreeseconds();//call the waitforthreeseconds
//     console.log('login end');   
//  }
//  function regigetUserData() {
//     waitforthreeseconds();//call the waitforthreeseconds 
//     console.log('Got User data ');
//  }
//  function displayUserData() {
//     console.log('user dat adisplay ');  
//  }
//  //now we call the function
//  register();
//  sendEmail();
//  Login();
//  regigetUserData();
//  displayUserData();

//  console.log('other application work');

//  //this is asynchronous 
//  function register() {
//     setTimeout(() => {
//         console.log('register end');
//     }, 2000);
//  }
//  function sendEmail() {
//     setTimeout(() => {
//         console.log('email end');
//     }, 1000);
//  }
//  function Login() {
//     setTimeout(() => {
//         console.log('login end');
//     }, 1000);
//  }
//  function regigetUserData() {
//     setTimeout(() => {
//         console.log('Got User data');
//     }, 1000);    
//  }
//  function displayUserData() {
//     setTimeout(() => {
//         console.log('user data display');
//     }, 1000);   
//  }
//  //now we call the function
//  register();
//  sendEmail();
//  Login();
//  regigetUserData();
//  displayUserData();

//  console.log('other application work');

 //here in this we changed the time then it will show output acc to timing network request but we need to line wise senario then we use callabck function
 
//  function register(callback) {//register function had became higher order function after putting function as parameter 
//     setTimeout(() => {
//         console.log('register end');
//         callback(); //(callback)function had been recevie
//     }, 1000);
//  }
//  function sendEmail(callback) {
//     setTimeout(() => {
//         console.log('email end');
//         callback();
//     }, 2000);
//  }
//  function Login(callback) {
//     setTimeout(() => {
//         console.log('login end');
//         callback();
//     }, 2000);
//  }
//  function regigetUserData(callback) {
//     setTimeout(() => {
//         console.log('Got User data');
//         callback();
//     }, 3000);    
//  }
//  function displayUserData() {
//     setTimeout(() => {
//         console.log('user data display');
//     }, 1000);   
//  }

//  register(function () {
//     sendEmail(function callback() {
//         Login( function () {
//             regigetUserData(function () {   
//             });
//             displayUserData();
//         });
//     });
//  });//we had pass the function and put the other function inside high order function this is callabck function
//this look complicate by using callback so we use promise 
//console.log('other application work');
     
console.log('promise');

// //showed the use of resolve
//     function register() {
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log('register end');
//                 resolve();
//             }, 1000);
//         });
    
//     }
//     function sendEmail() {
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log('email end');
//                 resolve();
//             }, 2000);
//         });
    
//     }
//     function Login() {
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log('login end');
//                 resolve();
//             }, 2000);
//         });
//     }
//     function regigetUserData() {
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log('Got User data');
//                 resolve();
//             }, 3000); 
//         });  
//     }
//     function displayUserData() {
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log('user data display');
//                 resolve();
//             }, 3000); 
//         });     
//     }
//     register()
//     .then(sendEmail)
//     .then(Login)
//     .then(regigetUserData)
//     .then(displayUserData)//we can use .then when function "return" in promise,whatever we pass in return it will writtern inside of .then block 

//     console.log('other application work');


//this shows error 
// function register() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return reject('Error while registering');
//             console.log('register end');
//             resolve();
//         }, 1000);
//     });

// }
// function sendEmail() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('email end');
//             resolve();
//         }, 2000);
//     });

// }
// function Login() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('login end');
//             resolve();
//         }, 2000);
//     });
// }
// function regigetUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Got User data');
//             resolve();
//         }, 3000); 
//     });  
// }
// function displayUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('user data display');
//             resolve();
//         }, 3000); 
//     });     
// }

// register()
// .then(sendEmail)
// .then(Login)
// .then(regigetUserData)
// .then(displayUserData)
// .catch((err)=>{
// console.log('error:',err);
// });//whatever we pass in reject it will writtern inside of catch block

// console.log('other application work');

// console.log('shows use of await resolve');
// function register() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('register end');
//             resolve('Error while registering');
//         }, 1000);
//     });

// }
// function sendEmail() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('email end');
//             resolve();
//         }, 2000);
//     });

// }
// function Login() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('login end');
//             resolve();
//         }, 2000);
//     });
// }
// function regigetUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Got User data');
//             resolve();
//         }, 3000); 
//     });  
// }
// function displayUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('user data display');
//             resolve();
//         }, 3000); 
//     });     
// }

// //Async await:-better way to excute the promises,it can only use when the function is async
// async function authenticate() {
//     await register();
//     await sendEmail();
//     await Login();
//     await regigetUserData();
//     await displayUserData();
// }
// authenticate().then(()=>{//used .then just show the power of promises ,it shows after displaying the output show "all set."
//     console.log('all set');
// });
// console.log('other application work');


console.log('shows use of await reject');
// function register() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('register end');
//             resolve('Error while registering');
//         }, 1000);
//     });

// }
// function sendEmail() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return reject('error while email');
//             console.log('email end');
//         }, 2000);
//     });

// }
// function Login() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('login end');
//             resolve();
//         }, 2000);
//     });
// }
// function regigetUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Got User data');
//             resolve();
//         }, 3000); 
//     });  
// }
// function displayUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('user data display');
//             resolve();
//         }, 3000); 
//     });     
// }
// async function authenticate() {
//     await register();
//     await sendEmail();
//     await Login();
//     await regigetUserData();
//     await displayUserData();
// }
// authenticate().then(()=>{
//     console.log('all set');
// }).catch((err)=>{
//     console.log(err);
// });
// console.log('other application work');


console.log('Try ,catch');
// function register() { 

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('register end');
//             resolve('Error while registering');
//         }, 1000);
//     });

// }
// function sendEmail() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             return reject('error while email');
//             console.log('email end');
//         }, 2000);
//     });

// }
// function Login() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('login end');
//             resolve();
//         }, 2000);
//     });
// }
// function regigetUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Got User data');
//             resolve();
//         }, 3000); 
//     });  
// }
// function displayUserData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('user data display');
//             resolve();
//         }, 3000); 
//     });     
// }
// async function authenticate() {
// try{   
//     await register();
//     await sendEmail();
//     await Login();
//     await regigetUserData();
//     await displayUserData();
// } catch(err){
//     console.log(err);
//     throw new Error();
//     }
// }
// authenticate().then(()=>{
//     console.log('all set');
// }).catch((err)=>{
//     console.log(err);
// });
// console.log('other application work');

console.log('');