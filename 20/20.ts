function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else {
            switch(stack.pop()) {
                case '(':
                    if (s[i] !== ')') return false;
                    break;
                case '[':
                    if (s[i] !== ']') return false;
                    break;
                case '{':
                    if (s[i] !== '}') return false;
                    break;
                default:
                    return false;
            }
        }
    }

    return stack.length === 0;
};