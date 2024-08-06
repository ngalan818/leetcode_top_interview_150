function containsNearbyDuplicate(nums: number[], k: number): boolean {
    
    let positions: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (positions.has(nums[i])) {
            if (i - positions.get(nums[i])! <= k) {
                return true;
            }
        }
        positions.set(nums[i], i);
    }

    return false;
};