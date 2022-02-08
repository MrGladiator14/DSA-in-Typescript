//return file IDs in output if timestamp is grater than given timestamp
function incrementalBackups (lastBackupTime: number, data: number[][]): number[] {
    const fileIds: number[] = [];
    for(let part of data) {
        const fileBackuptime = part[0];
        const filedId = part[1];
        if (fileBackuptime > lastBackupTime) {
            if (!fileIds.includes (filedId)) {
                fileIds.push(filedId);
            }
        }
    }
    return fileIds.sort((a, b) => a - b);

}

console.log(incrementalBackups ( 6969455, [[6969453, 1],
    [6969454, 2], [6969455, 6],
    [6969456, 5], [6969457, 3],
    [6969457, 5]]));
