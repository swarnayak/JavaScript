console.log('say Hello JavaScript');
// alert('this alerts you');



console.log('Array:-In array we can store object ,string ,any other datatype;');

// for (let i = 0; i <4; i++) {
//     console.log('Hello');    
// } loop



// const actor =[
//     {
//         name:'actor1',
//         payment: 50
//     },
//     {
//         name:'actor2',
//         payment: 100
//     },
//     {
//         name:'actor3',
//         payment:150
//     }
// ];
// console.log(actor[0]);
// console.log(actor.length);
// console.log('Name:', actor[0].name);


console.log('For Loop');
// for (let i=0; i<actor.length;i++) {
//     actor[i].payment=actor[i].payment-10;
//     //console.log(i) //it will shows index number 
//     //console.log(actor[i]); //it will actors name and payment
// }
//  console.log(actor)//console.log(actor[i]); both shows same result


console.log('for Each Loop:-arrow function');
// actor.forEach(actor => {
//     actor.payment=actor.payment-10;
// });
// console.log(actor);


console.log('for Of Loop');
// for (let  i of actor) {
    // console.log(actor);
    //    i.payment=i.payment-10;
//}
// console.log(actor);



console.log('fliter:-give result in bollean ');
//  const students =[
//     {
//         name:"student 1",
//         marks:45
//     },
//     {
//         name:"student 2 ",
//         marks:60
//     },
//     {
//         name:"student 3",
//         marks:35
//     }
//  ];
// console.log(students);

//  students.filter((kids) => {
//     console.log(kids);
// });


//this shows output because return is true
// const failed =students.filter((students)=>{
//     return true;
// });
// console.log(failed);


//this will not shows output because return is false
// const failed =students.filter((students)=>{
//     return false;
// });
// console.log(failed);


//now we want to less than 45 marks will fail ,abve or equal to 45 marks will passout
// const failed=students.filter((kids)=>{
//     //1st method if else
//     if(kids.marks<45){
//             return true;
//     }
//         return false;
     
//     //or else we can directly write return which will give result in boolean
//     return kids.marks<45;
// });
// console.log(failed);

// const failed=students.filter((kids) =>{
//     kids.marks<45
// });
// console.log(failed);



console.log('Map:-helps to place fname &last name align together');
// const users=[
//     {
//         fname:'neha',
//         lname:'nayak'
//     },
//     {
//         fname:'swarnlata',
//         lname:'nayak'
//     }
// ];
//  console.log(users);

// const finalusers= users.map((user) => {
//     return{
//         fullname:`${user.fname} ${user.lname}`
//     };
    
// });
// console.log(finalusers);


// const finalusers= users.map((user) => {
//     return{
//         realname:user.fname+''+user.lname
//     };
// });
// console.log(finalusers);



console.log('Reduce:-hleps to get total amount ');
// const anime=[
//     {
//         name:"nomi",
//         budget:100
//     },
//     {
//         name:"lucfy",
//         budget:150
//     },
//     {
//         name:"usha",
//         budget:300
//     }
// ];

// let total=0;
// anime.forEach(character => {
//     total+=character.budget;
// });
// console.log(total);

// const total=anime.reduce((final, character) => {
//     final=final+character.budget;
//     return final
// }, 0);
// console.log(total);



console.log('Indexof:-helps to find whether this ID is correct or not for single user');
// const admin=[2,1,5];
// const user={
//     name:'xyz',
//     id:5
// }
// // console.log(admin.indexOf(user.id));
// const isadmin=admin.indexOf(user.id)> -1;
// console.log(isadmin);

console.log('Includes:-helps whether this ID belongs to admin or not');
// console.log(admin.includes(user.id));




console.log('find:-helps to find whether this ID is correct or not');
// const user=[
//     {
//         name:'xyz',
//         id:1
//     },
//     {
//         name:'abc',
//         id:2
//     },
//     {
//         name:'pqr',
//         id:3
//     }
// ];
// const Myusers=user.find((users) => {
//     // if (users.id === 2){
//     //     return true;
//     // }
//     // return false;
//    //  // return users.id===3;
//    return users.name==='pqr';
// });
// console.log(Myusers);



console.log('sort:-help in souting name in alphabetical order ');
// const names=['john','neha','parth','bhavesh','chinu','arun'];
// names.sort();
// console.log(names);


console.log('slice:-helps to remove value');
// const names=['john','neha','parth','bhavesh','chinu','arun'];
// names.splice(4,5);
// console.log(names);

console.log('splice:-the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.');
// const food = ['pizza', 'cake', 'salad', 'cookie'];

// food.splice(1,3,"eat")
// console.log(food)