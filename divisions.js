// Calculate how many times a number can be divided by a given number.
function divisions(n,  divisor) {
let count = 0
while(n % divisor <= 1){
n = n/ divisor
count ++
}
console.log('count:', count);
}

divisions(6,2)
divisions(100, 2)