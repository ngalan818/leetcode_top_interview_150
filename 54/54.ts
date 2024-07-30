function spiralOrder(matrix: number[][]): number[] {
    
    if (matrix.length == 1 || matrix[0].length == 1) {
        return matrix.flat();
    }

    let ans: number[] = [];

    let i = 0;  // row
    let j = 0;  // col

    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    let vDirection = 0;
    let hDirection = 1;

    let num = matrix[0].length * matrix.length;
    while (ans.length < num) {
        ans.push(matrix[i][j]);

        if (i == top && j == left && vDirection == -1) {
            left++;
            vDirection = 0;
            hDirection = 1;
        }
        else if (i == top && j == right && hDirection == 1) {
            top++;
            vDirection = 1;
            hDirection = 0;
        }
        else if (i == bottom && j == right && vDirection == 1) {
            right--;
            vDirection = 0;
            hDirection = -1;
        }
        else if (i == bottom && j == left && hDirection == -1) {
            bottom--;
            vDirection = -1;
            hDirection = 0;
        }
        i = i + vDirection;
        j = j + hDirection;
    }
    return ans;
};