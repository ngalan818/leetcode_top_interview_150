/**
 Do not return anything, modify board in-place instead.
 */
 function gameOfLife(board: number[][]): void {
    

    let lastRow: number[] = [];
    let lastNum: number = 0;
    for (let i = 0; i < board[0].length; i++) {
        let tmp = lastNum;
        lastNum = board[0][i];
        lastRow.push(board[0][i]);
        board[0][i] = cellNextState(board, [], tmp, 0, i);
    }
    
    for (let i = 1; i < board.length; i++) {
        // console.log(lastRow)
        let thisRow: number[] = [];
        lastNum = 0;
        for (let j = 0; j < board[0].length; j++) {
            let tmp = lastNum;
            lastNum = board[i][j];
            thisRow.push(board[i][j]);
            board[i][j] = cellNextState(board, lastRow, tmp, i, j);
            // console.log(board[i][j])
        }
        lastRow = thisRow;
    }

    function cellNextState(board: number[][], lastRow: number[], lastNum: number, i: number, j: number): number {
        let count: number = 0;

        for (let m = j - 1; m <= j + 1; m++) {
            if (m < 0 || m > lastRow.length - 1) continue;
            if (lastRow[m] === 1) {
                count++;
            }
        }
        // console.log(`count: ${count}`)
        for (let k = i; k <= i + 1; k++) {
            if (k > board.length - 1) continue;
            for (let m = j - 1; m <= j + 1; m++) {
                if (m < 0 || m > board[0].length - 1 || (k === i && m === j)) continue;
                if (k === i && m === j - 1) {
                    if (lastNum === 1) {
                        count++;
                    }
                } else if (board[k][m] === 1) {
                    // console.log(`k: ${k}, m: ${m}`)
                    count++;
                }
            }
        }
        // console.log(`i: ${i}, j: ${j}, count: ${count}`)

        if (board[i][j] === 1) {
            if (!(count === 2 || count === 3)) {
                return 0;
            } else {
                return 1;
            }
        } else {
            if (count === 3) {
                return 1;
            } else {
                return 0;
            }
        }
    }

};