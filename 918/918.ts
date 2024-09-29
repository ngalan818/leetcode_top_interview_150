function maxSubarraySumCircular(nums: number[]): number {
    let n = nums.length;
    let max = nums[0];
    let min = nums[0];
    let totalSum = nums[0];
    let maxSumUpToI = nums[0];
    let minSumUpToI = nums[0];
    for (let i = 1; i < n; i++) {
        maxSumUpToI = Math.max(nums[i], nums[i] + maxSumUpToI);
        max = Math.max(max, maxSumUpToI);
        minSumUpToI = Math.min(nums[i], nums[i] + minSumUpToI);
        min = Math.min(min, minSumUpToI);
        totalSum += nums[i];
    }
    return max < 0 ? max : Math.max(max, totalSum - min);
};