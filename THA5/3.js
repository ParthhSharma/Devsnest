var first = function(input,n){
    if(n<0){
        return [];
    }
    if(n){
        return input.slice(0,n);
    }
    else{
        return input.shift();
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));