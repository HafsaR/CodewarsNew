function digPow(n,p){
    var digits = [];
    let num = n;
    let k=0;
    while(num>0){
        digits.push(num%10);
        num=parseInt(num/10);
       
    }
    digits.reverse();
   // console.log(digits);
    for(let i=0;i<digits.length;i++)
    {
        //console.log(digits[i])
        k += Math.pow(digits[i],p)
      //  console.log(Math.pow(digits[i],p));
        p+=1;
    }
    
 console.log("K : ",k)
 console.log(n);
 

 if(k%n == 0){
     console.log("K: ",k);
     console.log(`${k} is divisible by n ${n}:  "`)
     return k/n;
 }
 console.log(`${k} is not divisible by n ${n}:  "`)
return ('!k: ',-1);

}

digPow(46288,3);
digPow(89,1);
digPow(92,1)