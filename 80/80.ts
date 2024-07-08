function removeDuplicates(nums: number[]): number {
    let index = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] != nums[index - 2]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return nums.length < index ? nums.length : index;
};