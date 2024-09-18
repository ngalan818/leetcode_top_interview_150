function permute(nums: number[]): number[][] {
    let n = nums.length;
    let ans: number[][] = [];
    backtrack(new Set());
    return ans;

    function backtrack(intermediate: Set<number>) {
        if (intermediate.size == n) {
            ans.push([...intermediate]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!intermediate.has(nums[i])) {
                intermediate.add(nums[i]);
                backtrack(intermediate);
                intermediate.delete(nums[i]);
            }
        }
    }
};