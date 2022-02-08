//program finds out number of candidates who can win the election given
//array of votes per candidate already casted and remaining votes
function electionResult(votes:number[],k:number): number{
    let inTheRunning=0;
    const mostVotes=Math.max(...votes);
    const sortedVotes=votes.sort((a,b)=>b-a);//descending
    votes.forEach((voteCount)=>{
        if(mostVotes-voteCount<k){
            inTheRunning++;
        }
    })
    if(sortedVotes[0]!==sortedVotes[1] && k===0){
        return 1;
    }
    return inTheRunning;

}
console.log(electionResult([2,3,5,2,6,6,9],5));