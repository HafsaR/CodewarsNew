function rot13(message){
    let newLetterCode,newLetter,range;
    
    let letter = message.split('').map((l)=>{

        
//console.log(l.charCodeAt(0));
        
        newLetterCode = l.charCodeAt(0)+13;
        if(newLetterCode>=122){
            console.log('code bigger');
            let code = newLetterCode-123;
            console.log(`code: ${code}`);
            newLetterCode = 97+code;
            
        }
        
        newLetter = String.fromCharCode(newLetterCode);
        console.log(`newLetter: ${newLetter}, new letter code: ${newLetterCode}`);

        console.log('.......................')

    }).join(' ');  
    console.log(`Letter: ${letter}`);
    return letter;
    
}

rot13('test');
rot13('hello')