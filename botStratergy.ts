//return avg time if correctness =1, correctness=0 for not answered and -1 if wrong
function botStratergy(trainingData: number[][]):number{ //data[time][correctness]
    let time=0, correctness=0;
    trainingData.forEach((data:number[]) => {
        if(data[1]===1){
            time+=data[0];
            correctness+=1;
        }
        
    });
    return time/correctness || 0;
}
console.log(botStratergy([[4,1],[4,-1],[0,0],[6,1]]));