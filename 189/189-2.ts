/**
 Do not return anything, modify nums in-place instead.
 */

/** Time: O(n), space: O(1) */
function rotate(nums: number[], k: number): void {
    k = (k % nums.length);
    if (k > 0) {
        reverse(nums, 0, nums.length - k - 1);
        reverse(nums, nums.length - k, nums.length - 1);
        reverse(nums, 0, nums.length - 1);
    }

    function reverse(nums: number[], start: number, end: number): void {
        for (let i = 0; i < Math.ceil((end - start) / 2); i++) {
            let tmp = nums[start + i];
            nums[start + i] = nums[end - i];
            nums[end - i] = tmp;
        }
    }
};