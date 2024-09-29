function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let i = Math.floor(mid / n);
        let j = mid - i * n;

        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};