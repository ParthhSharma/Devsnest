let images = ["cards/1.png", "cards/2.png", "./cards/3.png", "./cards/4.png", "./cards/5.png", "./cards/6.png", "./cards/7.png", "./cards/8.png", "./cards/9.png", "./cards/10.png"];
images = [...images,...images];
let moves=30;
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
var clicked=0;
var cards = document.querySelectorAll('.flip-card');
let i=0;
cards.forEach(function(card){
    
   
    card.addEventListener('click',()=>{
        if(!gameActive) return;
        moves--;
        // document.querySelector("span").innerHTML = moves;

    if(clicked){
        card.firstElementChild.classList.add("flipped");
        gameActive = false;
        setTimeout(()=>{
            if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                card.firstChild.classList.remove("flipped");
                clicked.firstChild.classList.remove("flipped");
            }else{
                matches++;
                card.style.visibility="hidden";
                clicked.style.visibility="hidden";
            }
            clicked = undefined;
            gameActive = true;
        }, 500);
    }
    else{
        console.log(card);
        card.firstElementChild.classList.add('flipped');
    }
});
});
