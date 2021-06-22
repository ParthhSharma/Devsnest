var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var maxFreq = 0;
var element;
for(var i=0;i<arr1.length;i++){
    var count = 0;
    for(var j=i;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            count++;
        }
        if(count>maxFreq){
            maxFreq = count;
            element = arr1[i];
        }
    }
}
console.log(element+" ( "+maxFreq+" times )");