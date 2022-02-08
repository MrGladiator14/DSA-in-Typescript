// returns true if incorrect password was inserted mkore than 10 times

function incorrectPasswordAttempt(password: string, attempts: string[]): boolean {
    let failed = 0;
    for(let attempt of attempts) {
        failed = ( attempt === password )? 0 : failed+1;
        if(failed === 10) {
            return true;}}
    return false;
}
console.log(incorrectPasswordAttempt('1111', ["3333", "4444", "9999", "3333","2222", "7777", "9999", "0000", "6666","8888", "7777", "5555", "1111"]));
