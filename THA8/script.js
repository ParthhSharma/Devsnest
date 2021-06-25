var boxes = document.querySelectorAll('.box');
var book = document.getElementById('bs');
var unbook = document.getElementById('lfs');
booked = 4;
unbooked = 14;
book.innerHTML = booked;
unbook.innerHTML = unbooked;

boxes.forEach(function(box){
    box.addEventListener("click",function(){
    if(box.classList.contains("box-clicked")&& !box.classList.contains("permanent")){
        box.classList.remove("box-clicked");
        unbooked++;
        booked--;
        book.innerHTML = booked;
        unbook.innerHTML = unbooked;
    }
    else{
        box.classList.add("box-clicked");
        booked++;
        unbooked--;
        book.innerHTML = booked;
        unbook.innerHTML = unbooked;
    }
});
})



