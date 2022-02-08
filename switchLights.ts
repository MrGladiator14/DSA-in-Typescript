//let 1 be on and zero off, take a string of 1&0's and 
//change the state of previous states at each iteration
//from 1st to last digit in the input
function switchLights(a: number[]): number[] {
    let L = [...a];
    for (let i = 0; i < L.length; i++) {
        if (a[i] === 1) {
            L = swapLights(L, i);}
    console.log(L)
    }
    return L;
}

function swapLights (lights: number[], currentIndex: number): number[] {
    for(let i = 0; i < currentIndex + 1; i++) {
        lights[i] = lights[i] === 1 ? 0 : 1
    }
    return lights;
}


console.log(switchLights([1, 1, 1, 1, 1]))
console.log(switchLights([0, 0]))
