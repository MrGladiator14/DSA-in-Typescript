//returns number of different unique symbols in the input string
function symbolCount2(s:string):number{
    const inputChars=s.split('');
    const uniqueChars=new Set();//no duplicates allowed in sets
    inputChars.forEach((char) => {
        uniqueChars.add(char);
        
    });
    console.log(uniqueChars);
    return uniqueChars.size;

}
console.log(symbolCount2("abracadabra"));