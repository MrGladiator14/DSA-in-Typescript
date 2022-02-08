//returns the 1st occuring repeated value
function fristRepetition(n:number[]):number{
    for(let i=0;i<n.length;i++){
        for(let j=i+1;j<n.length;j++){
            if(n[i]===n[j]){
                return n[i];
            }
        }
    }
    return -1;
}
console.log(fristRepetition([2,6,2,4,0,9,2,7,5,9,1,5,8]));