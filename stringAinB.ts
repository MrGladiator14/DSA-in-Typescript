//the program returns how many string a s can be formed out of b
function check(a:string,b:string):number{
    const aCount=alphabetCount(a)
    const bCount=alphabetCount(b)
    const Counts=[];
    for(let char in aCount){
        if(bCount.hasOwnProperty(char)){
            Counts.push(Math.floor(bCount[char]/aCount[char]));
        }else{
            return 0
        }
        return Math.min(...Counts)
    }

    
}
function alphabetCount(str:string):object{
    const chars=str.split('');
    const alphabetCount={}
    chars.forEach((char)=>{
        if(alphabetCount.hasOwnProperty(char)){
            alphabetCount[char]++
        }else{
            alphabetCount[char]=1
        }
    } );
    return alphabetCount
}
console.log(check('ra','abracadabra'))