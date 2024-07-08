function removeElement(nums: number[], val: number): number {
    let numVal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[i - numVal] = nums[i];
        } else {
            numVal++;
        }  
    }
    return nums.length - numVal;
};