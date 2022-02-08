//returns diff between indices of nums whose sum in the input
function findClosestPair(nums: number[], sum: number): number {
    let dist = -1;
    for(let i =0; i < nums.length; i++) { 
        for(let j= i + 1; j < nums.length - 1; j++) {
            const distdSum = nums[i] + nums[j]; 
            const absdist = Math.abs(i - j);
            if(sum === distdSum) { 
                if(dist === -1 || absdist < dist) {
                    dist = absdist;
                }
            }
        }
    }
    return dist;
}
    console.log(findClosestPair([1, 0, 2, 1, 3, 0], 4));
    console.log(findClosestPair([2, 3, 7], 7));
