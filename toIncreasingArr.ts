//finding out min no. of moves required to convert to strictly
//increasing array
function toIncreasingArr(input: number[]): number{
    let count = 0;
    for (let i=0;i<input.length;i++){
        if(input[i]>=input[i+1]){
            const diff= (input[i]+1)-input[i+1];//+1 for input[i] == input[i+1]
            input[i+1]=input[i]+1;
            count+=diff;
        }
    }
    return count;
}

console.log(toIncreasingArr([1,2,3,3,1,9,1]));