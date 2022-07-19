function pickPeaks(arr){
    let maxValue=0;
    for(let i=0;i<arr.length-1;i++)
{
    
    
    if(arr[i]>maxValue){
        maxValue=arr[i];
        console.log(`peak: ${maxValue}, position:${i}`)
       
    }

   
}
}


console.log(pickPeaks([0,1,2,,5,1,0]));