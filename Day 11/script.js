var start = document.querySelector(".start_btn");
var next = document.querySelector(".next_btn");
var info = document.querySelector(".info_box");
var chicken = document.querySelector(".quit");
var done = document.querySelector(".result_box .buttons .quit");
var go = document.querySelector(".restart");
var rstrt = document.querySelector(".result_box .buttons .restart");
var box = document.querySelector(".quiz_box");
var sections = document.querySelectorAll("section");
var que_no = document.querySelector(".total_que span");
var res_box = document.querySelector(".result_box");
var q_no = 0;
function question(ind) {
    if(ind==4){
        next.innerHTML = "Finish";
        for(sec of sections){
            sec.classList.add("que");
        }
    }
    if(ind>4){
        res_box.style.display = "initial";
        box.style.display = "none";
    }
    if(ind!=0){
        console.log(sections[ind-1]);
        console.log(ind-1);
        sections[ind-1].classList.add("que");
    }
    if(ind<=4){
        sections[ind].classList.remove("que");
    }
}

start.addEventListener('click',()=>{
    start.style.display = "none";
    info.style.display = "initial";
});
chicken.addEventListener('click',()=>{
    info.style.display = "none";
    start.style.display = "initial";
});
done.addEventListener('click',()=>{
    res_box.style.display = "none";
    start.style.display = "initial";
});
go.addEventListener('click',()=>{
    console.log("go for it clicked");
    info.style.display = "none";
    box.style.display = "initial";
    question(q_no);
    q_no++;
});
rstrt.addEventListener('click',()=>{
    console.log("play again clicked");
    res_box.style.display = "none";
    box.style.display = "initial";
    question(q_no);
    // q_no++;
});
next.addEventListener('click',()=>{
    que_no.innerHTML = q_no+1;
    question(q_no);
    q_no++;
});
