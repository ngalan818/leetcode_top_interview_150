function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a - b);

    let ans: Set<string> = new Set();

    for (let i = 0; i <= nums.length - 3; i++) {
        if (nums[i] > 0) break;
        
        let target = 0 - nums[i];
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            if (nums[j] + nums[k] === target) {
                ans.add(`${nums[i]},${nums[j]},${nums[k]}`);
                j++;
                k--;
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return Array.from(ans).map(s => s.split(',').map(n => Number.parseInt(n)));
};