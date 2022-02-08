//program finds out how many values are missing fron biggest to
//smallest integer
function makeArrayConsecutive(input: number[]): number {
    let count = 0;
    const sortedinput = input.sort((a, b) => a - b);
    const min = sortedinput [0];
    const max = sortedinput[sortedinput.length - 1];
    for(let i = min; i < max; i++) { 
        if(!input.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutive([7,4,6,9]));