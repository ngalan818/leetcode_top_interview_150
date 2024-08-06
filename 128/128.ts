function longestConsecutive(nums: number[]): number {

    let sorted = nums.sort((a, b) => a - b).filter((n, i, nums) => {
        return (i === 0 || nums[i - 1] !== n);
    })

    let max = 1;
    let length = 1;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i - 1] + 1 === sorted[i]) {
            length++;
        } else {
            if (length > max) {
                max = length;
            }
            length = 1;
        }
    }

    return Math.max(max, length);
};