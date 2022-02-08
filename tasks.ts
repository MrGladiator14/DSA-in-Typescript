//sorts tasks with deadline to today upcoming & later
function tasksTypes (deadlines: number[], day: number): number[] {
    let [today, upcoming, later] = [0, 0, 0];//array destructuring
    deadlines.forEach((deadline) => {
        if (deadline <= day) {
            today++;
        } else if (deadline >= day + 1 && deadline <= day + 7) {
            upcoming++; 
        } else {
            later++;
        }
    });
    return [today, upcoming, later];
}
console.log(tasksTypes([1, 2, 3, 7, 1, 9,  4, 5], 2))
console.log(tasksTypes([1, 2, 4, 2, 16,  12, 11, 7, 10, 3, 1, 4, 5, 4, 9, 8], 1));
