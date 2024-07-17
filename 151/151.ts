function reverseWords(s: string): string {
    
    let n = s.length;
    let ans = "";
    let whitespaceFound = false;

    let word = "";
    for (let i = n - 1; i >= 0; i--) {
        if (whitespaceFound) {
            if (s.charAt(i) !== ' ') {
                whitespaceFound = false;
                word = s.charAt(i) + word;
            }
        } else {
            if (s.charAt(i) === ' ') {
                whitespaceFound = true;
                ans += word + " ";
                word = "";
            } else {
                word = s.charAt(i) + word;
            }
        }
    }

    ans += word;

    return ans.trim();
};

function reverseWords(s: string): string {
    let words = s.trim().split(/\s+/);
    let i = 0;
    let j = words.length - 1;
    
    while (i < j) {
        const tmp = words[i];
        words[i] = words[j];
        words[j] = tmp;
        i++;
        j--;
    }

    return words.join(' ');
};