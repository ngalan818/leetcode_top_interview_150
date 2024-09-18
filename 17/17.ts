function letterCombinations(digits: string): string[] {
    let n = digits.length;
    if (n == 0) return [];
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let ans: string[] = [];
    backtrack(0, "");
    return ans;

    function backtrack(i: number, intermediate: string) {
        if (i === n) {
            ans.push(intermediate);
            return;
        }

        for (let letter of map[digits[i]]) {
            backtrack(i + 1, intermediate + letter);
        }
    }
};