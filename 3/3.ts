function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let charIndex: Map<string, number> = new Map();
    let i = 0
    for (let j = 0; j < s.length; j++) {
        if (charIndex.has(s[j])) {
            max = Math.max(max, charIndex.size);
            let k = charIndex.get(s[j])!;
            let tmp = k;
            while (k >= i) {
                if (!charIndex.delete(s[k])) {
                    break;
                }
                k--;
            }
            i = tmp + 1;
        }
        charIndex.set(s[j], j);
    }
    return Math.max(max, charIndex.size);
};