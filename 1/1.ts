function twoSum(nums: number[], target: number): number[] {
    const positions = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (positions[diff] !== undefined) {
        return [positions[diff], i];
      }
      positions[nums[i]] = i;
    }
  
    return [];
};