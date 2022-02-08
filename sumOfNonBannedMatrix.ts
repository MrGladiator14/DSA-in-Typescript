//in a 3*3 matrix, all zeros and the columns below them are banned
//this program returns the sum of all non banned elements
function regulatedMatrixSum(matrix: any[][]): number {
    let sum = 0;
    const bannedIndex: number[] = [];
    for (let i = 0; i < matrix.length; i++) { 
        for (let j = 0; j < matrix[i].length; j++) { 
            if (matrix[i][j] === 0) {
                bannedIndex.push(j); 
            } else if (!bannedIndex.includes(j)) {
             sum += matrix[i][j]
            }
        }
    }
    return sum;
}

console.log(regulatedMatrixSum( [[0, 5, 0, 0], [0, 5, 0, 0], [2, 0, 3, 3]]))
