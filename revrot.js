/* 
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
*/

function revrot(str,sz){
    let revstr;
   
if(sz<=0 ||  str === '')
{
    return '';
}

if(sz>str.length)
{
    return "";
}



let numChunks =  Math.ceil(str.length/sz);
let number=0;
const chunks = new Array(numChunks);
console.log(`numChunks: ${numChunks}`);
    
for(let i=0, o=0; i<numChunks;i++,o+=sz)
{
chunks[i] = str.substr(o,sz);

}

console.log(`Chunks: ${chunks}`);

//console.log(parseInt(chunks[0]));

chunks.map((ch)=>{
  //  console.log(`ch: ${ch}`)
    ch.split('').map((n)=>{
        number +=  parseInt(n);

    })
    
})
// chunks[0].split('').map((n)=>{
//    number +=  parseInt(n);

//    //console.log(`sum: ${number}`);
   
// })

if(number % 2 === 0){
    let revstr;
    let reverseStr = chunks.map((ch)=>{
      //  console.log(`chunks: ${ch}`)
         revstr = ch.split("").reverse().join("");
        // console.log(`reverstr: ${revstr}`);

        })
    console.log(`reverse string: ${revstr}`)
}else{
    let newString = [];
    let splitString = chunks[0].split('');
   
    for(let i=1;i<splitString.length;i++){
      
        newString.push(splitString[i]);
        
        
    }
    newString.push(splitString[0]);
    console.log(`new string: ${newString}`);
   // console.log(`split string: ${splitString}`)
}


}

revrot("123456987654",6);
revrot("66443875",4);
revrot("664438769",8);
revrot("",8);
revrot("123456779",0);
revrot('563000655734469485',4);