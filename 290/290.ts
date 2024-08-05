function wordPattern(pattern: string, s: string): boolean {
    let split = s.split(' ');
    if (pattern.length !== split.length) return false;

    let patternToS: Map<string, string> = new Map();
    let sToPattern: Map<string, string> = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        if (!patternToS.has(pattern[i])) {
            if (sToPattern.has(split[i]) && sToPattern.get(split[i]) !== pattern[i]) {
                return false;
            }
            patternToS.set(pattern[i], split[i]);
            sToPattern.set(split[i], pattern[i]);
        } else if (sToPattern.get(split[i]) !== pattern[i]) {
            return false;
        }
    }

    return true;
};

/** if n-to-1 relationship is allowed */
function wordPattern(pattern: string, s: string): boolean {
    if (pattern.length !== s.split(' ').length) return false;

    let regex = '';
    let regexGroups: Map<string, number> = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (!regexGroups.has(pattern[i])) {
            regexGroups.set(pattern[i], regexGroups.size);
            regex += '([a-z]+) ';
        } else {
            regex += `\\${regexGroups.get(pattern[i])} `;
        }
    }

    return s.match(new RegExp(regex.trim(), 'g'))?.length === 1;
};