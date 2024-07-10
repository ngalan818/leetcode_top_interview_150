function jump(nums: number[]): number {
    if (nums.length == 1) return 0;

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + i, nums[i - 1]);
    }

    let currentIndex = 0;
    let jumps = 0;

    console.log(nums);

    while (currentIndex < nums.length - 1) {
        jumps++;
        currentIndex = nums[currentIndex];
    }

    return jumps;
};