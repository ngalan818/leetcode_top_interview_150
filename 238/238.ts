/** Time: O(n), space: O(n) */

function productExceptSelf(nums: number[]): number[] {
    let prefixes: number[] = [];
    let suffixes: number[] = [];
    let n: number = nums.length;

    prefixes[0] = 1;
    suffixes[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        prefixes[i] = prefixes[i - 1] * nums[i - 1]; 
    }

    for (let i = n - 2; i >= 0; i--) {
        suffixes[i] = suffixes[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = prefixes[i] * suffixes[i];
    }

    return nums;
};

/** Time: O(n), space: O(1) */
function productExceptSelf(nums: number[]): number[] {
    let ans: number[] = [];
    let n: number = nums.length;

    ans[0] = 1;
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        nums[i] = nums[i] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        ans[i] = ans[i] * nums[i + 1];
    }

    return ans;
};

