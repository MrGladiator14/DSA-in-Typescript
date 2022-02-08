function validTime(time: string): boolean {
    const [hours, minutes] = time.split(':');
    if (parseInt(hours) > 23 || parseInt(hours) < 0) {
        return false;}
    if (parseInt(minutes) > 59 || parseInt(minutes) < 0) {
    return false;}
    return true;
}
console.log(validTime('13:69'));
console.log(validTime ('24:51'));
console.log(validTime('02:33'));
