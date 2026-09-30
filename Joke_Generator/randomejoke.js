let setup=document.querySelector("#setup");
let punchline=document.querySelector("#punchline");
let but=document.querySelector("#generateBtn");

but.addEventListener("click",()=>{
    fetch("https://official-joke-api.appspot.com/random_joke").then((fun)=>{
     return fun.json();
     }).then((nfun)=>{
     setup.textContent=nfun.setup;
     punchline.textContent=nfun.punchline;
     })
     .catch((error) => {
            console.log(error);
        });
})