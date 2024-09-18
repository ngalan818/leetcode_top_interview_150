function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort();
    let n = candidates.length;
    let ans: number[][] = [];
    backtrack(0, [], 0);
    return ans;

    function backtrack(startIndex: number, intermediate: number[], intermediateSum: number) {
        if (intermediateSum > target) return;
        if (intermediateSum == target) {
            ans.push([...intermediate]);
            return;
        }
        for (let i = startIndex; i < n; i++) {
            intermediate.push(candidates[i]);
            backtrack(i, intermediate, intermediateSum + candidates[i]);
            intermediate.pop();
        }
    }
};