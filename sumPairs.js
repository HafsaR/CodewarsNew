function sumPairs(ints,s){
    let  pairSum = [],sum,j=1;

    for(let i=0;i<=ints.length;i++){
      do{
          
          sum=ints[i]+ints[j];
        console.log(ints[i],ints[j]);
       
          if(sum==s){
            pairSum.push([ints[i],ints[j]])
         } 
         j++;
          }while(sum===s || j<=ints.length) ;

    
    }

    console.log(pairSum);
    return pairSum;

}

sumPairs([11,3,7,5],10);
sumPairs([4,3,2,3,4],6);