function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    let counts: number[] = new Array<number>(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        counts[magazine.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (--(counts[ransomNote.charCodeAt(i) - 97]) < 0) {
            return false;
        }
    }
    return true;
};