//returns number of different unique symbols in the input string
function symbolCount1(s:string):number{
    const inputChars:string[]=s.split('');
    const uniqueChars:string[]=[];
    inputChars.forEach((char) => {
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char);
        }
        
    });
    console.log(uniqueChars);
    return uniqueChars.length;

}
console.log(symbolCount1("cabca"));