// // alert("hello world");
// console.log("hello world");
// console.log(window)
// window.console.log("hello world after window");
// // window.alert("hello world");
// console.dir(document)
// // console.dir(document.body)
// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.head)
// // we are seeing html by js how cool it is 
// //light dark mode run time dynamically we do by js to html
// console.log(document.body.style.background="green")
// // document.body.childNodes[3].innerText="hello world"
// // dynamically manipulation done by dom
// console.log(document.body)
// //selector in dom=============================
// // it return element so we store it in variable
// let head=document.getElementById("heading")
// console.log(head) 
// // we use different id for each element in html so that by that unique id we can access that element in js//
// //class same for different element if we want same styling

// let headin=document.getElementsByClassName("hedclass")
// // it return html collection array ki tra all element withs same class
// console.dir(headin)
// console.log(headin)

// let btu=document.getElementById("btn")
// console.log(btu) 

// //tag name access
// let par=document.getElementsByTagName("p")
// console.log(par)

//query selector better than all for all 
// it return node list

// ===id
// let firstElement=document.querySelector("#heading")
// console.dir(firstElement)

// // class
// let allElement=document.querySelectorAll(".hedclass")
// console.dir(allElement)

// //tag
// let alelement=document.querySelectorAll("p")
// console.dir(alelement)


// //get ,set change by dom element


// // Properties===========================
// // tagName : returns tag for element nodes

// // innerText : returns the text content of the element and all its children

// innerHTML : returns the plain text or HTML contents in the element

// textContent : returns textual content even for hidden elements

// every node has first child property and last child property  and parent property

// console.dir(document.body.firstChild)
//first child ,last child,sibling children
// type of dom nodes  tect nodes,comment nodes and element nodes we always used the element nodes
// we just use element node and ignore other nodes

// document.querySelector("div").children

// let ul = document.getElementById("list");
//     console.log(ul.firstElementChild); // First <li> element
//     console.log(ul.lastElementChild);  // Last <li> element
//     console.log(ul.firstElementChild.nextElementSibling); // Second <li> (Item 2)

// let div = document.getElementById("demo");
//     console.log(div.childNodes);  // Includes text node and element node
//     console.log(div.firstChild.nodeType); // Output: 3 (Text Node)
//     console.log(div.firstElementChild.nodeType); // Output: 1 (Element Node)


// let divi=document.querySelectorAll("div")
// // console.dir(div)
// console.log(divi)

// let div = document.getElementById("container");
// console.log(div.innerText);
// console.log(div.innerHTML);
// //we set the text 
// div.innerText = "hello world";
// console.log(div.innerText);

// div.innerHTML = "<div><h1>hello world</h1></div>"
// console.log(div.innerText);

// let ul = document.querySelector("ul");
// console.log(ul.innerText);  // Output: "Apple Orange" (Banana is hidden)
// console.log(ul.textContent); // Output: "Apple Banana Orange" (Includes hidden text)


document.body.appendChild(h2);