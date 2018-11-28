var array1 = [1, 2, 3, 4, 5],
    array2 = ['first', 'second', 3, 4, 5, 'last'];
var result1 = getReversArray(array1),
    result2 = getReversArray(array2);
console.log('result1:', result1);
console.log('result2:', result2);
function getReversArray(array) {
    var result = [];
    for (var i = array1.length -1; i >= 0; i--) {
        result.push(array1[i]);
    }
    for (var i = array2.length-1; i >= 0; i--) {
        result.push(array2[i]);
    }
    return result;
}
