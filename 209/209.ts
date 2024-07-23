function minSubArrayLen(target: number, nums: number[]): number {
    let minLength = 100001;
    let sum = 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];

        while (sum >= target) {
            minLength = Math.min(minLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
    }

    return minLength > 100000 ? 0 : minLength;
};