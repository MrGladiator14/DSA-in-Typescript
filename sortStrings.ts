function sortByLength(input: string[]): string[] {
    return input.sort((a, b) => a.length - b.length);
}

console.log(sortByLength([ 'abc','', 'a', 'zz', 'abc', 'aaa','t', 'kkkkk', 'zz']));