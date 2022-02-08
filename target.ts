
function growth(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let days = 0;
    let totalHeight = 0;
    while(totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;
        if(totalHeight < desiredHeight) {
            totalHeight -= downSpeed;
        }
    }
    return days;
}
console.log(growth(10, 1, 910));
