/** Time: O(nlogn), space: O(n) */

function hIndex(citations: number[]): number {
    let sorted = citations.sort((a,b) => a-b).reverse();
    // console.log(sorted);
    let h = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < i + 1) break;
        h++;
    }
    return h;
};