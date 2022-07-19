function factorial(n){
    let mul=1;

    if(n<=0 || n>=12){
        throw new RangeError(`Range error....`)
    }
    for(let i=n;i>=1;i--){
          mul *= i;
    }
    console.log(`Factorial : ${mul}`);

    return mul;

}

factorial(3);
factorial(1);
factorial(40);