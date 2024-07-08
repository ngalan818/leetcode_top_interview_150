/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let ptr1 = m - 1;
    let ptr2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (ptr1 >= 0 && nums1[ptr1] > nums2[ptr2] || ptr2 < 0) {
            nums1[i] = nums1[ptr1];
            ptr1--;
        } else {
            nums1[i] = nums2[ptr2];
            ptr2--;
        }
    }
};