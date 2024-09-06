let url="https://dog.ceo/api/breeds/image/random";
let bnt=document.querySelector("button");
bnt.addEventListener("click",async()=>{
    let link = await getimg();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
});
async function getimg() {
    try{
        let res=await axios.get(url);
        return res.data.message;

    }
    catch(e){
        console.log("error");
        return "/";
    }
    
}

