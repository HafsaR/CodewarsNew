function pangram(string){
    string = string.toLowerCase();
    console.log(string);
    let regex = /([a-z])(?!.*\1)/g;
    
//    return (string.match(regex)||[]).length ===26;
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 

}

console.log(pangram("The quick brown fox jumps over the lazy dog"));
