var findMissing = function(list){

    let listLength = list.length;
    let findDifference = list[listLength-1]-list[list.length-2];
    let missingElement;

    for(let i=0;i<list.length-1;i++){
        if(list[i+1]-list[i] !== findDifference){
             missingElement = list[i]+findDifference;
            console.log(`missingElement: ${missingElement}`);
            list.splice(i+1,0,missingElement);
        }
       }
    console.log(list);
return list;
}

findMissing([1,3,5,9,11]);
findMissing([1,3,4]);