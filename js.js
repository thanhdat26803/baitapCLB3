//bai1
let a = 1;
let b = 'abc';
console.log(Number.isInteger(a)); 
console.log(Number.isInteger(b));

//bai2
Array.prototype.swap = function (a, b) {
    var valueAtIndex = this[a]
        this[a] = this[b]
        this[b] = valueAtIndex
}
Array.prototype.permutation = function permutation(array, n) {
    array = array || this
    n = n || array.length
    var result = []
if (n == 1)
 result = [array.slice()]
else {
    const nextN = n - 1
    for (var i = 0; i < nextN; i++) {
        result.push(...permutation(array, nextN))
        array.swap(Number(!(n % 2)) && i, nextN)
    }
    result.push(...permutation(array, nextN))
}
return result
}
    console.log([2, 3, 4].permutation())

//bai3
    let log=['2','2',' 3'];
    log.indexOf();
    console.log(log);