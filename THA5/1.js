var is_array = function(input){
    if(Array.isArray(input)){
        return true;
    }
    return false;
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));