function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) &&
            !(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) &&
            !(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
                i++;
                continue;
        }
        if (!(s.charCodeAt(j) >= 97 && s.charCodeAt(j) <= 122) &&
            !(s.charCodeAt(j) >= 65 && s.charCodeAt(j) <= 90) &&
            !(s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57)) {
                j--;
                continue;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};