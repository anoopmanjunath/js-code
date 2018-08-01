var numbers=[10,15,27,46];

function evenArray(numbers){
    var result = [];
    numbers.forEach(function(n){
        if(n % 2 == 0){
         result.push(n);
        }
    });
return result;
}
console.log(evenArray(numbers));