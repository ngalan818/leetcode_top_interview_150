function canJump(nums: number[]): boolean {
    if (nums.length == 1) return true;

    let jumpsNeeded = 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= jumpsNeeded) {
            jumpsNeeded = 1;
        } else {
            jumpsNeeded++;
        }
    }

    return nums[0] >= jumpsNeeded;
};