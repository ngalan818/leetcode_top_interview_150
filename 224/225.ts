function calculate(s: string): number {
    return calculate(s)[0];
    function calculate(s: string): number[] {
        let ans = 0, op, close;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === ' ') continue;
            if (s[i] === ')') {
                close = i;  // save the position of close bracket for return so that the outer recusion can skip ahead 
                break;
            }
            if (s[i] === '+' || s[i] === '-') {
                op = s[i];
            } else {
                let num;
                if (s[i] === '(') {
                    let [tmpAns, closePos] = calculate(s.substring(i + 1));    // calculate inside the bracket
                    num = tmpAns;
                    i += closePos + 1;    // +1 because closePos is the postion of close bracket in substring (start from 0)
                } else {
                    let j = i;
                    let str = '';
                    while (j < s.length) {  // parse number with >1 digits
                        if (s[j] === '+' || s[j] === '-' || s[j] === ')') break;
                        str += s[j];
                        j++;
                    }
                    num = parseInt(str);
                    i = j - 1;  // -1 because j is already the operator (i++ in for-loop)
                }
                if (op === '+') {
                    ans += num;
                } else if (op === '-') {
                    ans -= num;
                } else {
                    ans = num;
                }
            }
        }

        return [ans, close];
    }
};