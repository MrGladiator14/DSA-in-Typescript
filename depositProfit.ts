function depositProfit(deposit: number, rate: number, target: number): number {
    let yr = 0; 
    let account = deposit;
    while(target > account) {
    account += account * (rate / 100); 
    yr++;}
    return yr;
}
 
console.log(depositProfit(1000, 9.8, 2000));
