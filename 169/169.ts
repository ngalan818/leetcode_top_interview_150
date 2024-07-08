/* Time complexity: O(N), space complexity: O(N) */
function majorityElement(nums: number[]): number {
    let numsMap: Map<number, number> = new Map<number, number>();
    nums.forEach(num => {
        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num) + 1);
        } else {
            numsMap.set(num, 1);
        }
    });

    let maj;
    numsMap.forEach((v, k) => {
        if (maj == undefined) {
            maj = k;
        } else if (v > numsMap.get(maj)) {
            maj = k;
        }
    });

    return maj;
};