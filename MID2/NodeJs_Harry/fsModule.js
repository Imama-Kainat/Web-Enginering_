const fs=require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
    
// })

//async se hum intentially code ko block kr rahe he 
// const a=fs.readFileSync('file.txt')
//     console.log(a.toString())
    //.to string content ko print krwane ke liea krte he 

// console.log("This is a finished file reading")
//pehle finish file print hoa bad me read file ka content show hoa
//readfile is a callback function ,dont blocking pr kam krta he


//by selecting content we can run the specific content 

// fs.writeFile('file.txt',"this is ada heehe",()=>{
//     console.log("This is a finished file writing ")
// }
// )

const b=fs.writeFileSync('file.txt',"this is a data")
    console.log("This is a finished file writing ")


