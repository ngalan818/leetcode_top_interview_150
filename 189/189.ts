/**
 Do not return anything, modify nums in-place instead.
 */

/** Time: O(n), space: O(n) */
function rotate(nums: number[], k: number): void {
    let k_ = (k % nums.length);
    if (k_ > 0) {
        nums.slice(-(k_)).concat(nums.slice(0, nums.length - k_)).forEach((n, i) => {
            nums[i] = n;
        });
    }
};