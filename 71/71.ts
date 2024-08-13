function simplifyPath(path: string): string {
    let split = path.split('/');
    let stack: string[] = [];
    for (const s of split) {
        if (s === '..') {
            stack.pop();
        } else if (s === '.') {
            continue;
        } else if (s.length > 0) {
            stack.push(s);
        }
    }

    return '/' + stack.join('/');
};