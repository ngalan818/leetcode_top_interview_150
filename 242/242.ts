function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    
    let counts: number[] = new Array<number>(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < t.length; i++) {
        if (--counts[t.charCodeAt(i) - 97] < 0) return false;
    }

    return true;
};