function longestCommonPrefix(strs: string[]): string {
    let ans = "";
    let n = strs[0].length;

    for (let i = 0; i < n; i++) {
        let prefix = strs[0].charAt(i)
        let allMatch = true;
        for (let j = 0; j < strs.length; j++) {
            if (prefix != strs[j].charAt(i)) {
                allMatch = false;
                break;
            }
        }
        if (!allMatch) {
            break;
        }
        ans += prefix;
    }

    return ans;
    
};