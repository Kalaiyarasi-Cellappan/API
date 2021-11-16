let pa=document.getElementById("p");
var responseBody;
async function test(){
    let response= await fetch("https://restcountries.com/v3.1/name/peru");
    responseBody=await response.json();
    return responseBody;
}
test().then((res)=>{
    console.log(res);
    let s=res[0].borders;
    //let s=JSON.stringify(res[0]);
    pa.innerHTML=s;
})
.catch((e)=>{
    console.log(e)
})