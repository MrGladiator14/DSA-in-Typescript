//assume a numberline on which the elements of the input array are the
//obstacles, the function returns a mininum number of steps per jump
// to be taken to avoid
//all the obstacles
function avoidObstacles(inputArray: number[]): number{
    inputArray=inputArray.sort((a,b)=>a-b); //returns sorted array
    console.log(inputArray);
    const largestArrVal=inputArray[inputArray.length-1];

    for(let i=1;i<=largestArrVal+1;i++){
        if(inputArray.every((Element)=> Element%i !==0))//so every multiples of i will avoid every obstacle
        {return i};
    }
}

console.log(avoidObstacles([5,3,5,9,2,4,6,8]));
