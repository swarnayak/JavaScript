//Dom Manipulation Document Object Model

// //1.getElementById
// const DOM =document.getElementById("DOM");
// console.log(DOM);

// 2.getElementsByTagName

// const DOM = document.getElementsByTagName('h1');
// console.log(DOM);

//its result comes in array type so we can use index
// const DOM = document.getElementsByTagName('h1');
// console.log(DOM[0]);

// 3.getElementByClassName
//it will return collection of className.
// const DOM =document.getElementsByClassName('DOM');
// console.log(DOM);

// 4.QuerySelector
//css type ke selector likhte hai
// const data = document.querySelector('.DOM');
// console.log( data);
//good property to use 

// 5.QuerySelectorAll
// const DOM =document.querySelectorAll('.DOM');
// console.log(DOM );


// TRAVERSE DOM

// 1.ParentNode(property)
// const DOM = document.querySelector('.DOM');
// const parent =DOM.parentNode;
// console.log(parent);

//2.childernNodes
// const parent=document.querySelector('.parent');
// console.log(parent.childNodes);

//3.nextElementSbling
// const heading=document.querySelector('.DOM');
// console.log(heading.nextElementSibling);

//4.previousElementSbling
// const heading=document.querySelector('h3');
// console.log(heading.previousElementSibling);


//manipulation

//basic manipulation
// const DOM=document.querySelector('.DOM');
// DOM.innerHTML='web is Great!';//replaced the content
// DOM.style.color='red';//change teh css of content
// DOM.style.fontSize='100px';
// DOM.classList.add('title');//add the class
// DOM.classList.remove('DOM');//remove the class


//time for leveling up Advance Level Manipulation

//create elements
// const DOM =document.createElement('h1');
// DOM.innerHTML='javascript is Great';
// console.log(DOM);


// const DOM =document.createElement('h1');//we create html tag 
// DOM.innerHTML='javascript is Great';
// const parent=document.querySelector('.parent');
// parent.appendchild(DOM);

// console.log(DOM);

 

//DOM's Event
// const button=document.querySelector('#btn');
// const heading=document.querySelector('#heading');

//add event listenser
// button.addEventListener('click',function () {
//     console.log('button clicked');
//})  

//this create event 
// button.addEventListener('click',function (event) {
//     heading.style.color="purple";
//     heading.style.fontSize="60px";
//     console.log('button clicked');
//     }) 



console.log('project 1');
// const bulbswtich=document.querySelector('#bulbSwtich');
// const bulb=document.querySelector('#bulb');

// bulbswtich.addEventListener('click',function () {
//     console.log(bulb.src);
//     bulb.src='./pic_bulbon.gif';
// });//here in this we just added addeventlistner back we can again turn off the light


// bulbswtich.addEventListener('click',function () {
//     console.log(bulb.src);
//     if (bulb.src.match('off')) {
//         bulb.src="./pic_bulbon.gif";
//         bulbswtich.innerHTML='Turn OFF';
//     }
//     else{
//         bulb.src='./pic_bulboff.gif'
//         bulbswtich.innerHTML='Turn On';
//     }
  
// });

console.log('project-2');