function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let ratios: Map<string, number> = new Map();
    let groups: Map<string, Set<string>> = new Map();
    let ans: number[] = [];

    for (let i = 0; i < equations.length; i++) {
        let numerator: string = equations[i][0];
        let denominator: string = equations[i][1];
        let value: number = values[i];

        if (!ratios.has(numerator) && !ratios.has(denominator)) {
            ratios.set(numerator, value);
            ratios.set(denominator, 1);

            let group = new Set([numerator, denominator]);
            groups.set(numerator, group);
            groups.set(denominator, group);
        } 
        else if (ratios.has(numerator) && ratios.has(denominator)) {
            let denominatorGroup = groups.get(denominator)!;
            let numeratorValue = ratios.get(numerator)!;
            let denominatorValue = ratios.get(denominator)!;
            let group = groups.get(numerator)!;
            for (let variable of denominatorGroup) {
                ratios.set(variable, ratios.get(variable)! * (numeratorValue / value) / denominatorValue);
                
                group.add(variable);
                groups.set(variable, group);
            }
        }
        else if (ratios.has(numerator)) {
            let numeratorValue = ratios.get(numerator)!;
            ratios.set(denominator, numeratorValue / value);

            let group = groups.get(numerator)!;
            group.add(denominator);
            groups.set(denominator, group);
        } 
        else {
            let denominatorValue = ratios.get(denominator)!;
            ratios.set(numerator, denominatorValue * value);

            let group = groups.get(denominator)!;
            group.add(numerator);
            groups.set(numerator, group);
        }
    }

    for (let query of queries) {
        let numerator = query[0];
        let denominator = query[1];

        if (!ratios.has(numerator) || !ratios.has(denominator) || !groups.get(numerator)!.has(denominator)) {
            ans.push(-1);
            continue;
        }

        ans.push(ratios.get(numerator)! / ratios.get(denominator)!);
    }

    return ans;
};