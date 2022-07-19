/*
Write a function that takes a string of 
parentheses, and determines if the order of 
the parentheses is valid. The function should 
return true if the string is valid, 
and false if it's invalid.
*/ 

function validParenthesis(str){

    let stack = [];
    let map = {
        '(':')'
       
    }

    for(let i=0;i<str.length;i++){
        if(str[i] === '(')
        {
            stack.push(str[i]);
        }
        else{
            let last = stack.pop();

            if(str[i] !== map[last])
            {
                return false;
            }
        }       
    }
   
    if(stack.length !== 0){return false;}

    return true;
}

console.log(validParenthesis("()"));
console.log(validParenthesis(")(()))"));
console.log(validParenthesis("("));
console.log(validParenthesis("(())((()())())"))
