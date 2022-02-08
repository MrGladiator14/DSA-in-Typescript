//program checks if the step number corr to stage name
//are in increasing order i.e. 
//for 1st occur: stageName1:stepNumber4
//for 2nd occur: stageName1:stepNumber67
//returns true if stepNumber67>stepNumber4 else false

function NameSequenceChecker(theNames:string[],stepNumbers:number[]):boolean{
    const nameSequence={};
    for(let i=0;i<theNames.length;i++){
        if(nameSequence.hasOwnProperty(theNames[i])){
            if(nameSequence[theNames[i]]>stepNumbers[i]){
                return false;
            }
            nameSequence[theNames[i]]=stepNumbers[i]
        }else{
            nameSequence[theNames[i]]=stepNumbers[i]
        }
    }
    return true;
}
console.log(NameSequenceChecker(["stage1","stage3","stage2","stage1","stage2"],[1,2,3,4,5]));
console.log(NameSequenceChecker(["stage1","stage3","stage2","stage1","stage2"],[1,2,3,4,1]));