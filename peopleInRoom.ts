// cat has 4 legs and human has2 
// progman returns array of possible number of humans in the room

function numberOfPeople(legs: number): number[] {
    const count: number[] = [];
    if (legs === 2) {
        return [1];
    }

    while (legs >= 0) {
    count.unshift(legs/2);//pushes to begining of array
    legs -= 4;
    }

    return count;
}

console.log(numberOfPeople(8));
console.log(numberOfPeople(22));
console.log(numberOfPeople(9));