/** brute force */
function groupAnagrams(strs: string[]): string[][] {
    let ans: string[][] = [];
    let counts: Map<string, number>[] = [];

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let isNewAnagram = true;
        let count: Map<string, number> = new Map();
        for (let j = 0; j < str.length; j++) {
            count.set(str[j], (count.get(str[j]) || 0) + 1);
        }

        for (let j = 0; j < counts.length; j++) {
            if (ans[j][0].length !== str.length || 
                count.size !== counts[j].size) continue;
            let isAnagram = true;
            for (const [letter, num] of count) {
                if (counts[j].get(letter) !== num) {
                    isAnagram = false;
                    break;
                }
            }
            if (isAnagram) {
                ans[j].push(str);
                isNewAnagram = false;
                break;
            }
        }
        if (isNewAnagram) {
            ans.push([str]);
            counts.push(count);
        }
    }

    return ans;
};

function groupAnagrams(strs: string[]): string[][] {
    let counts: Map<string, string[]> = new Map();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let key = str.split('').sort().join();

        if (counts.has(key)) {
            counts.get(key)?.push(str);
        } else {
            counts.set(key, [str]);
        }

    }

    return Array.from(counts.values());
};