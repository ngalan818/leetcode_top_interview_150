function evalRPN(tokens: string[]): number {
    if (tokens.length === 1) return Number.parseInt(tokens[0]);

    let stack: number[] = [];
    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            let right = stack.pop()!;
            let left = stack.pop()!;
            switch (token) {
                case "+":
                    stack.push(left + right);
                    break;
                case "-":
                    stack.push(left - right);
                    break;
                case "*":
                    stack.push(left * right);
                    break;
                case "/":
                    let div = left / right;
                    stack.push(div < 0 ? Math.ceil(div) : Math.floor(div));
                    break;
            }
        } else {
            stack.push(Number.parseInt(token));
        }
    }

    return stack[0];

};