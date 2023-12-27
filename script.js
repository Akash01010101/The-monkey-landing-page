document.querySelector("#theme").addEventListener("click",function changeTheme() {
    document.querySelector("#theme").style.display="none";
   document.querySelector("body").style.backgroundImage="none";
   document.querySelector("body").style.backgroundColor="black";
   document.getElementById("foot").style.backgroundColor="gray";
   document.getElementById("foot-text").style.color="white";
   document.getElementById("reset").style.display="block";
})
document.getElementById("reset").addEventListener("click",function reset(){
    document.querySelector("body").style.backgroundColor="";
    document.querySelector("body").style.backgroundImage="";
    document.getElementById("foot").style.backgroundColor="";
    document.getElementById("foot-text").style.color="";
    document.getElementById("reset").style.display="none";
    document.querySelector("#theme").style.display="block";
    
})