// Create 2 object and try to use call, apply and bind on them
const Shinobi1 = {
    name:'Uchiha Madara',
    eye1:'Mangekyo Sharingan',
    eye2:'Rinnegan'
}
const Shinobi2 = {
     name:'Hatake Kakashi',
     eye1:'Regular',
     eye2:'Mangekyo Sharingan'
}
const Shinobi3 = {
    name:'Uchiha Obito',
    eye1:'Mangekyo Sharingan',
    eye2:'Rinnegan'
}
const Shinobi4 = {
    name:'Uchiha Sasuke',
    eye1:'Mangekyo Sharingan',
    eye2:'Mangekyo Sharingan'
}

function isSusanoPossible(){
    if(this.eye1=='Mangekyo Sharingan'&&this.eye2=='Mangekyo Sharingan'
    ||this.eye1=='Mangekyo Sharingan'&&this.eye2=='Rinnegan'){
        console.log("Yes "+this.name+" can do the Susan'o");
    }
    else{
        console.log("No "+this.name+" cannot do the Susan'o");
    }
}
isSusanoPossible.call(Shinobi1)
isSusanoPossible.apply(Shinobi2);
const OpShinobi =  isSusanoPossible.bind(Shinobi3);
OpShinobi();