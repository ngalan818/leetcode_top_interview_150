function maxSubArray(nums: number[]): number {
    let max = -10001;
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        let nSum = getFirstNSum(i);
        max = Math.max(max, nSum);
        let left = 0;
        let right = i;
        while (right < n) {
            nSum -= (nums[left++] - nums[right++]);
            max = Math.max(max, nSum);
        }
    }
    return max;

    function getFirstNSum(firstN: number): number {
        let sum = nums[0];
        for (let i = 1; i < firstN; i++) {
            sum += nums[i];
        }
        return sum;
    }
};


function maxSubArray(nums: number[]): number {
    let max = -10001;
    maxSubArray(nums.length - 1);
    return max;

    function maxSubArray(i: number): number {
        let maxSumEndingAtI = i == 0 ? 
            nums[0] : Math.max(nums[i], nums[i] + maxSubArray(i - 1));
        max = Math.max(max, maxSumEndingAtI);
        return maxSumEndingAtI;
    }
}