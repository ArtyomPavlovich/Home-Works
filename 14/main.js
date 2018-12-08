var array1 = [1, 2, 3, 4, 5],
    array2 = ['first', 'second', 3, 4, 5, 'last'];
var result1 = getReversArray(array1),
    result2 = getReversArray(array2);
console.log('result1:', result1);
console.log('result2:', result2);
function getReversArray(array) {
    var result = [];
    var a = 0;

    for(var x = array.length-1; x >= 0; x--){
        result[a] = array[x];
        a++;
    }

    return result;
}