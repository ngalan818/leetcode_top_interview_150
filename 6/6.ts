function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let ans = "";

    for (let i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            for (let j = i; j < s.length; j += ((numRows - 1) * 2)) {
                ans += s.charAt(j);
            }
        } else {
            let j = i;
            let skips = [(numRows - 1 - i) * 2, i * 2];
            let k = 0;
            while (j < s.length) {
                ans += s.charAt(j);
                j += skips[k % 2];
                k++;
            }
        }
    }

    return ans;
};

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    let rows: string[] = new Array(numRows).fill('');
    let flag = false;
    for (let i = 0, j = 0; i < s.length; i++) {
        rows[j] += s.charAt(i);
        if (i !== 0 && j % (numRows - 1) === 0) {
            flag = !flag;
        }
        if (flag) {
            j--;
        } else {
            j++;
        }
    }
    
    let ans = "";
    for (let i = 0; i < numRows; i++) {
        ans += rows[i];
    }
    return ans;
};