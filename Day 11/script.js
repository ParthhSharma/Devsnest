var start = document.querySelector(".start_btn");
var info = document.querySelector(".info_box");
var chicken = document.querySelector(".quit");
var go = document.querySelector(".restart");
var que1 = document.querySelector("#que1");

start.addEventListener('click',()=>{
    start.style.display = "none";
    info.style.display = "initial";
});
chicken.addEventListener('click',()=>{
    info.style.display = "none";
    start.style.display = "initial";
});
go.addEventListener('click',()=>{
    info.style.display = "none";
    que1.style.display = "initial";
});
