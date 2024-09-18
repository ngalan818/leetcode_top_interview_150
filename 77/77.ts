function combine(n: number, k: number): number[][] {
    let ans: number[][] = [];
    backtrack(0, []);
    return ans;

    function backtrack(i: number, intermediate: number[]) {
        if (i == k) {
            ans.push([...intermediate]);
            return;
        }
        for (let j = (intermediate[intermediate.length - 1] || 0) + 1; j <= n; j++) {
            intermediate.push(j);
            backtrack(i + 1, intermediate);
            intermediate.pop();
        }
    }
};