function twoSum(arr,n){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == n){
                console.log(`indecec is: ${arr[i]}, ${arr[j]}`);
                return [i,j]
            }
        }

    }


}

console.log(twoSum([1,2,3],4));
console.log(twoSum([1234,5678,9012],14690));
console.log(twoSum([2,2,3],4))