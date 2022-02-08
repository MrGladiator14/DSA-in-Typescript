/*
website helps professionals grow their business by identifing new customers, upon registering on website, a Pro specifies
which categories of service they provide. to help match customer request with qualified pros, website maintains a list of 
pros grouped by service categories
given a list of pros and their category preferences, reutrn the list of pros for each category
Example
preferences=[["computer repair"],["handyman"],["house cleaning"]],[["computer repair"],["computer lessons"],["Data recovery services"]],
		[["computer lessons"],["house cleaning"]]
pros=["Jack","Leon","Maria"]
output:
[[['Computer lessons'],['Leon'.'Maria']],[['computer repair'],['jack','Leon'],[['data recovery service'],['Leon']],[['house cleaning'],['jack','maria']]]
*/
function proCategorizing(pro:string[],preferences:string[][]):string[][][]{
    let proPref1={};
    let proPref=[];
    for(let i=0;i<pro.length;i++){
        for(let j=0;j<preferences[i].length;j++){
            if(proPref1.hasOwnProperty(preferences[i][j])){
                proPref1[preferences[i][j]].push(pro[i]);
            }else{
                proPref1[preferences[i][j]]=[pro[i]];

            }
        }
    }
    console.log(proPref1)
    for(const proP in proPref1){
        proPref.push([[proP],[...proPref1[proP]]])
    }
    proPref=proPref.sort((a,b)=>{ //sorting 3D array od strings
        const pref1L=a[0][0].toLowerCase()
        const pref2L=b[0][0].toLowerCase()
        if(pref1L>pref2L){
            return 1
        }
        if(pref1L<pref2L){
            return -1
        }
        return 0
    });
    return proPref;
}
console.log(proCategorizing(
    ["Jack","Leon","Maria"],[["computer repair","handyman","house cleaning"],
["computer repair","computer lessons","Data recovery services"],["computer lessons","house cleaning"]]))