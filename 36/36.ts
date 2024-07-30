function isValidSudoku(board: string[][]): boolean {
    let valid = true;
    
    for (let i = 0; i < 9; i++) {
        let bits = 511; // 111111111
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let num = Number.parseInt(board[i][j]);
                if ((bits >> num) & 0x1) {
                    bits = bits ^ (1 << num);
                } else {
                    return false;
                }
            }
        }

        bits = 511;
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") {
                let num = Number.parseInt(board[j][i]);
                if ((bits >> num) & 0x1) {
                    bits = bits ^ (1 << num);
                } else {
                    return false;
                }
            }
        }

        bits = 511;
        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") {
                let num = Number.parseInt(board[3 * (i % 3) + Math.ceil((j + 1) / 3) - 1][(j % 3) + Math.floor(i / 3) * 3]);
                if ((bits >> num) & 0x1) {
                    bits = bits ^ (1 << num);
                } else {
                    return false;
                }
            }
        }
    }

    return valid;
};