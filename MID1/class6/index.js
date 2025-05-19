document.getElementById("demo");
document.getElementById("demo").innerText="Revised Title";
let mainElemnt=document.getElementsByTagName("body").innerHTML="<h1>I m changed!</h1>";
let currentElement=document.getElementById("profile-picture");
let count=0;
let newImage=document.createElement("img");

newImage.src="../class2/image.jpg"; 

currentElement.parentNode.replaceChild(newImage,currentElement);
currentElement.style.color="red";
currentElement.style.backgroundColor="red";
let myElement = document.createElement("div");
let myButton=document.createElement("button");

myButton.innerText="Click Me";
myElement.appendChild(myButton);
document.body.appendChild(myElement);


// myButton.onclick=function(){
//     alert("Hello World");
// }
//myElement.remove();
// myButton.addEventListener("click",()=>alert("I am clicked!"));
myElement.addEventListener("click",()=>increment);
myElement.addEventListener("mouseover",function(){
    myButton.style.backgroundColor="yellow";
});
function increment() {
    return count++; 
}
// let label=document.createElement("label");
// label.innerText="Count: ";
setTimeout(myButton.innerText=count,3000);

let elements=document.getElementsByTagName("*");
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }
console.log(elements);
let elements1=document.querySelectorAll('*');
// elements1.forEach((element) => console.log(element));
console.log(elements1);
