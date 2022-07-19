// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

function MeanSquare(firstArray, secondArray) {
    var square=0, dif, avg
  for(let i=0; i<firstArray.length; i++){
    dif = firstArray[i] - secondArray[i]
    square += Math.pow(dif, 2)

  }
  avg = square / firstArray.length
  console.log(avg);
  return avg
}

MeanSquare([1,2,3],[4,5,6])
MeanSquare([10, 20, 10, 2], [10, 25, 5, -2])
MeanSquare([-1, 0], [0, -1]   )