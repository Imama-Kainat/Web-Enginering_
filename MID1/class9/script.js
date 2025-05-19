// console.log("I m starting");
// setTimeout(function() {
//     console.log("I m inside setTimeout");
// },1000);              //1 second call honay k bd print krega

// console.log("I m ending");

// console.log("Before");
// function fetchUser(){
//     setTimeout(function(){
//         //console.log("User is fetched");
//         return {
//             name:"user",
//             age:25
//         }
//     },2000);
    
// }
// const returnedUser =fetchUser();
// console.log(returnedUser);
// console.log("End");  


// console.log("Before");
// fetchUser(123, function(user){
//     console.log(user);
// });
// function fetchUser(userid,callback){
//     setTimeout(function(){
//         const fetcheduser={
//             id:userid,
//             name:'Nehal',
//             email:'name@example.com',
//             age:22
//         };
//         callback(fetcheduser);
//     },2000);
    
// }
// // const returnedUser =fetchUser();
// // console.log(returnedUser);
// console.log("End");   





// console.log("Before");
// function sendEmail(userEmail, callback) {
//     setTimeout(function () {
//         const response={
//             status: true,
//             message: `Email sent to ${userEmail}`
//         }
//         callback(response);
//     }, 3000);
// }

// // sendEmail('nehal@example.com', function(response){
// //     console.log(response);
// // });
// // console.log("End");


// fetchUser(123, function(user){
//     console.log(user);
//     sendEmail(user.email, function(emailResponse){    //callback hell
//         console.log(emailResponse);
//     });
// });
// function fetchUser(userid,callback){
//     setTimeout(function(){
//         const fetcheduser={
//             id:userid,
//             name:'Nehal',
//             email:'name@example.com',
//             age:22
//         };
//         callback(fetcheduser);
//     },2000);
    
// }


// console.log("Before");
// const promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         //resolve(1);
//         reject(new Error("I m filled"));
//     },2000);
// });
// // console.log(promise); //promise     //opentable website for making apis
// promise.then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
//     console.log(error.message);
// });
// const getAPI=fetch('https://api.github.com/users/nasif1731');

// getAPI.then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
// });

// const Promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(1);
//     },2000);
// });
// const Promise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject(new Error("I m filled"));
//     },2000);
// });
// const Promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(3);
//     },2000);
// });
// Promise.all([Promise1,Promise2,Promise3]).then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
// });

// Promise.race([Promise1,Promise2,Promise3]).then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
// });

// const gitAPI=fetch('https://api.github.com/users/nasif1731');

// gitAPI.then(res=>res.json()).then(profile=>console.log(profile)).catch(function(error){
//     console.log(error);
// });

async function getgitData() {
    const gitAPI=await fetch('https://api.github.com/users/nasif1731');
    const profile=await gitAPI.json();
    console.log(profile);     
   
}
getgitData();

// localStorage.setItem('github','https://api.github.com/users/nasif1731');
// const prof=localStorage.getItem('github');
// console.log(prof);

// const users=[
//     {id:1,name:'Nehal',age:22},
//     {id:2,name:'Ali',age:25},
//     {id:3,name:'Zainab',age:23}
// ]
// console.log(JSON.stringify(users));
// console.log(users);

// const json=JSON.stringify(users);
// localStorage.setItem('users',json);
// const users1=localStorage.getItem('users');
// console.log(JSON.parse(users1));
