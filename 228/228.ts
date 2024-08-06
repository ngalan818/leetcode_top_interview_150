function summaryRanges(nums: number[]): string[] {
    let ans: string[] = [];

    let start = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 !== nums[i]) {
            if (start === nums[i - 1]) {
                ans.push(`${nums[i - 1]}`);
            } else {
                ans.push(`${start}->${nums[i - 1]}`);
            }
            start = nums[i];
        }
    }

    return ans;
};