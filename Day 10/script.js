let images = ["cards/1.png", "cards/2.png", "./cards/3.png", "./cards/4.png", "./cards/5.png", "./cards/6.png", "./cards/7.png", "./cards/8.png", "./cards/9.png", "./cards/10.png"];
images = [...images,...images];
let moves=40;
let matches=0;
let gameActive=true;
let backs = document.querySelectorAll('.flip-card-back');
let j=0;
backs.forEach((back)=>{
    let rand=Math.floor(Math.random()*(20-j));
    back.innerHTML="<img src="+ "'" +images[rand]+ "'" + "style =" + "'" + "box-sizing:border-box; width:140px; height:135px;" + "'" + ">";
    images.splice(rand, 1);
    j++;
});
var clicked;
var cards = document.querySelectorAll('.flip-card');
cards.forEach(function(card){
    card.addEventListener('click',()=>{
        if(!gameActive) return;
        moves--;
        document.querySelector("span").innerHTML = moves;

    if(clicked){
        console.log(card);
        card.firstElementChild.classList.add("flipped");
        gameActive = false;
        setTimeout(function(){
            console.log(clicked.id);
            console.log(card.id);
            if(card.id===clicked.id){

            }
            else if((card.firstElementChild.lastElementChild.innerHTML
                !==clicked.firstElementChild.lastElementChild.innerHTML)){
                card.firstElementChild.classList.remove("flipped");
                clicked.firstElementChild.classList.remove("flipped");
            }
            else{
                matches++;
                card.style.visibility="hidden";
                clicked.style.visibility="hidden";
            }
            clicked = undefined;
            gameActive = true;
        }, 500);
    }
    else{
        clicked = card;
        card.firstElementChild.classList.add('flipped');
    }
});
});
setInterval(() => {
    if(moves === 0){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector("#moves").style.display="none";
        let h2=document.createElement("h2");
        document.querySelector(".popup > div > h2").innerHTML="You Lose !!";
    }
    if(matches === 10){
        document.querySelector(".popup").style.display="flex";
        document.querySelector(".container").style.display="none";
        document.querySelector("#moves").style.display="none";
        document.querySelector(".popup > div > h2").innerHTML="You Won !!"
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e)=>{
    window.location.reload();
});
