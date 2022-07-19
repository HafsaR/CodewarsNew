// sum of all the multiples of 3 or  5 

function findSum(n){

    let sum = 0;
    for(let i=3;i<=n; i++){
        if(i%3 == 0 || i%5 == 0){
            sum += i;
        }

    }
    console.log(sum);

    return sum;

}

findSum(10);
findSum(5);