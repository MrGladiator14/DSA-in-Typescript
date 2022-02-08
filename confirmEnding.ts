//checks the ending of given string
function confirmEnding(str: string, target: string) {
      const start = str.length - target.length;
      return str.substring(start) === target;}
console.log(confirmEnding("fraction", "action"));
console.log(confirmEnding("black pen", "pen"));
console.log(confirmEnding("clan", "hen"));