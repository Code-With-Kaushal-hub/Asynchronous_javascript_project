//const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchValue)}`;
let red=document.querySelector("#red");
let yellow=document.querySelector("#yellow");
let green=document.querySelector("#green");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");
let statusText=document.querySelector("#statusText");
let timer=document.querySelector("#timer");

let count=5;
let color="red";
function timercount(){
    count=count-1;
    
    
    if(count==0){
        count=5;
        if(color=="red"){
            color="yellow";
            red.style.opacity = "0.2";
            yellow.style.opacity = "1";
            statusText.textContent="WAIT"
        }
        else if(color=="yellow"){
            color="green";
            yellow.style.opacity = "0.2";
            green.style.opacity = "1";
            statusText.textContent="GO";
        }
        else{
            color="red";
            green.style.opacity = "0.2";
            red.style.opacity = "1";
            statusText.textContent="STOP";
        }
    }
    timer.textContent=count;
}
let end = null;

start.addEventListener("click",()=>{
      if(end===null){
      red.style.opacity = "1";
      statusText.textContent="STOP";
      end=setInterval(timercount,1000);
      }
      
})
stop.addEventListener("click",()=>{
    clearInterval(end);
    end = null;
})
reset.addEventListener("click",()=>{
    color="red";
    count=5;
    statusText.textContent="Press Start to on Traffic Light";
    timer.textContent=count;
    red.style.opacity = "0.2";
    yellow.style.opacity = "0.2";
    green.style.opacity = "0.2";
})