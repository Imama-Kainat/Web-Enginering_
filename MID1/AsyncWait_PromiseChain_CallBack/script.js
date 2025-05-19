// async await >> promise chains >> callback hell


// // function hello() {
// //     console.log("Hello World!");
// // }

// // setTimeout(hello, 5000); // 5000 milliseconds = 5 seconds

// //asyncrhonus programming did not wait for timeout parallel chl rha he 
// console.log("Hello World! 1");
// console.log("Hello World! 2");
// setTimeout(()=>{
//     console.log("Hello World!");
// // },5000)
// // console.log("Hello World! 12");


// // //call back is an argument pass function to other function 
//  function sum(a,b){
//     console.log(a+b) ;
//  }

//  function calculator(a,b, sumcallback){
//      sumcallback(a,b);
//  }

//  calculator(1,2,sum);
// //call back already bne fucntion ka name b pass skte or khud se define b kr skte he 
//  calculator(1,2,(a,b)=>{
//     console.log(a+b);
//  })

//  const hello=()=>{
//     console.log("Hello World!");
// }
// //set time out b call back fucntion he jis me wo pehla parameter me koi funciton leta he 
// setTimeout(hello, 5000); // 5000 milliseconds = 5 seconds


//===callback hell=====
// nested call back 

// let age=18;
// if(age>18){
//     console.log("You are eligible to vote");
//     if(age>21){
//         console.log("You are eligible to drink");
//     }
//     else{
//         console.log("You are not eligible to drink");
//     }
// }

// function gitdaa(dataid){
// console.log(dataid);
// }

// function gitdaa(dataid){
//    setTimeout(() => {
//     console.log( "data",dataid);
//    }, 2000);
//     }
// gitdaa(1);//2s
// gitdaa(2);//2s
// gitdaa(3);//2s
//data1 
//data2
//data3

//pehla user name then password ka aye 
//hme individually delay chaea
// we will use callback in this case 
// function gitdaa(dataid,getnextdata){
//     setTimeout(() => {
//      console.log( "data",dataid);
//      if (getnextdata){
//         getnextdata();
//      }
     
//     }, 2000);
//      }
// //  gitdaa(1,gitdaa(2));//2s
// //  we dont write parentheseis with callback funciton 
// //so we write in this way take eror na aye 
// gitdaa(1,()=>{
//     gitdaa(2,()=>{
//         gitdaa(3,()=>{
//           gitdaa(3)  
//         })
//     })
// })
// the above is callback hell difficult to understand 
// we will use promise in this case
// promise is eventual completion of task jo b kam houga ya wo reject ho ga ya accept hoga 



// let promise=new Promise((resolve,reject)=>{
//     console.log("promise is pending");
//     // resolve(12);//this function reslove automatically formed by js 
//     reject("promise is rejected"); //this function reject automatically formed by js
// })

// there are 3 states of promise =pending ,fulfil,rejected 
//promise result 


// we use it for api key they also give return promise 
// function getdata(dataid, getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             // resolve("sucess ")
//             reject("eror")
//             if (getNextdata){
//                 getNextdata();
//             }
//         }, 5000);
//     })
// }


// how we will use promise
// fulfil->then
// reject->catch 

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("promise is pending");
//         // resolve(12);//this function reslove automatically formed by js 
//         reject("promise is rejected"); //this function reject automatically formed by js
//     })  
//     }
       
    
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise is resolved"+res)
// })
// promise.catch((err)=>{
//     console.log("promise failed"+err)
// })

//promise chain
// function aysncFunc1(){
//     // as we are using time that why we are saying it async funciton
//     return new Promise((resolve,reject)=>{
//         console.log("start it ")
//         setTimeout(() => {  
//             console.log("data 1");
//             // resolve("success");
//         }, 5000);
        
//     })
// }

// function aysncFunc2(){
//     // as we are using time that why we are saying it async funciton
//     return new Promise((resolve,reject)=>{
//         console.log("start it ")
//         setTimeout(() => {  
//             console.log("data 2");
//             // resolve("success");
//         }, 5000);
        
//     })
// }
// console.log("fetching data1")
// aysncFunc1().then((res)=>{
//     console.log("fetching data2")
//     let p2=aysncFunc2(); 
// p1.then((res)=>{
//     console.log(res)
// })
// })



//async function
// async function hello(){
//     console.log("hello")
// }

// async only can use await which wait the promise fulfilment
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("weather data")
            resolve("data")
        },2000);
    }
    
                     );
}
// async function getdata(){
//     await api();
//     console.log("first call complete");
//     await api();
// }
// getdata()

//iffi
(async function getdata(){
    await api();
    console.log("first call complete");
    await api();
})();