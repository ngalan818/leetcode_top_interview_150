function lengthOfLastWord(s: string): number {
    let n = s.length;
    let flag = false;
    let ans = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (flag) {
            if (s.charAt(i) === ' ') {
                break;
            }
            ans++;
        } else {
            if (s.charAt(i) !== ' ') {
                ans++;
                flag = true;
            }
        }
    }
    return ans;
};