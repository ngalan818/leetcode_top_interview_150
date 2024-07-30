/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let j = 0, k = matrix.length;
        while (j < k) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][k];
            matrix[i][k] = tmp;
            j++;
            k--;
        }
    }

};