function oddOrEven(array){

    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(`Sum: ${sum}`);

    if(sum%2 == 0){
        return 'even';
    }else{
        return 'odd';
    }

}

oddOrEven([0,1,4]);