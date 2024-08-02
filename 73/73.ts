/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    
    let zeroCol: Set<number> = new Set();
    let zeroRow: Set<number> = new Set();
    for (let i = 0; i < matrix.length; i++) {
        let hadZero = false;
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCol.add(j);
                hadZero = true;
            }
        }
        if (hadZero) {
            matrix[i] = new Array(matrix[0].length).fill(0);
            zeroRow.add(i);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!zeroRow.has(i)) {
            zeroCol.forEach(v => {
                matrix[i][v] = 0;
            })
        }
    }
};