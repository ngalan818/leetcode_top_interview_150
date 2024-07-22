function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};