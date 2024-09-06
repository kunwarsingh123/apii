// function saveDb(data,success,failure)
// {
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4)
//     {
//         console.log(data);
//         success();
//     }
//     else{
//         console.log("weak1",internetspeed);
//         failure();
//     }
// }

// saveDb("apna college",() =>{
//     console.log("success,save to db")
//     saveDb("hello world",()=>{
//         console.log("success");
//         saveDb("My name ajay singh",()=>{
//             console.log("success3")
//         },()=>{
//             console.log("weak connections");
//         })

//     },()=>{
//         console.log("weak connection2:");
//     })
// },()=>{
//     console.log("failure:weak connectin");
// }
// )



// function saveDb(data)
// {
//     return new Promise((success,failure)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4)
//     {
       
//         success("data wasbsaved",data);

//     }
//     else{
       
//         failure("weak connectionss");
//     }
//     })
// }
// let req=saveDb("save amount");
// req.then(()=>{
//     console.log("promise was resolved");
//     return saveDb("save data1")
//     .then(()=>{
//         console.log("data 2 saved");
//         return saveDb("Ajay singh")
//         .then(()=>{
//             console.log("Success3 data");
//         })
        
//     })
// })
// .catch(()=>{
//     console.log("weak");
// })


// async function greet(){
//    // throw "page not found";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err",err);
// })

// let demo= async ()=>{
//     return 5;
// }


// async and await keyword/*
/*
function getNum()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();

        },1000)
    })
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    
}


function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
        })
    })
}*/

let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5);
            if(num<3)
            {
                reject("promise rejected");
            }
            h1.style.color=color;
            console.log(`color changed ${color}`);
            resolve("color changed");
        },delay)
    })


}

async function demo() {
    try{
    await changecolor("red",1000)
    await changecolor("blue",2000)
    await changecolor("green",1000)}
catch(err){
    console.log(err);
}

let a=5;
console.log(a);
console.log("new number=",a+3);
    
}
demo();