// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    // TODO: Program me
    let removed;
    let length = arr.length;
   for(let i=0;i<arr.length;i++){
       if(arr[i]===0){
         removed= arr.splice(i,1)
         
        
    }
  
  
   }
   arr.concat(removed)
   console.log(arr)
   
  }

//   var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
//   }


  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  moveZeros([1,2,0,1,0,1,0,3,0,1])
  moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])