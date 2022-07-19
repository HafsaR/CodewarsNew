function alphabetPosition(text,literal){
    if(!literal) text = text.toUpperCase();
    let str = text.replace(/[^0-9&\/\\#,+()$~%.'":*?! _<>{}@]/g, '');
    console.log(str);
    return str.split('').map((c)=>{
       // console.log('abcdefghijklmnopqrstuvwxyz'.indexOf(c)+1 || (literal? c : ''));
       console.log(c.charCodeAt(0)-65+1);
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c)+1 || (literal? c : '');
        
    }).join(' ');
   }


alphabetPosition('Hello again, world!')
//console.log(a);