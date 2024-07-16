/** time: O(n), space: O(n) */
function candy(ratings: number[]): number {
    let n: number = ratings.length;
    let candy: number[] = new Array<number>(n).fill(1);
    let ans: number = 0;

    for (let i = 0; i < n; i++) {
        if (i < n - 1 && ratings[i + 1] < ratings[i]) {
            let end: number = i;
            for (let j = i; j < n; j++) {
                end = j;                  
                if (ratings[j + 1] >= ratings[j]) {
                    break;
                }
            }
            for (let j = end - 1; j > i; j--) {
                candy[j] = candy[j + 1] + 1;
            }
            if (i > 0 && ratings[i - 1] < ratings[i] ) {
                candy[i] = Math.max(candy[i - 1], candy[i + 1]) + 1;
            } else {
                candy[i] = candy[i + 1] + 1;
            }
            i = end;
        } else if (i > 0 && ratings[i - 1] < ratings[i]) {
            candy[i] = candy[i - 1] + 1;
        }
    }

    for (let i = 0; i < n; i++) {
        ans += candy[i];
    }
    return ans;
};

/** Time: O(n) space: O(1) */
function candy(ratings: number[]): number {
    let n: number = ratings.length;
    let ans: number = 0;
    let candies: number = 1;
    let c: number[] = [];

    for (let i = 0; i < n; i++) {
        if (i < n - 1 && ratings[i + 1] < ratings[i]) {
            // decreasing rankings
            let end: number = i;
            for (let j = i; j < n; j++) {
                end = j;                  
                if (ratings[j + 1] >= ratings[j]) {
                    break;
                }
            }
            let tmp = 0;
            let d = [];
            for (let j = end; j > i; j--) {
                tmp += 1;
                ans += tmp;
            }

            if (i > 0 && ratings[i - 1] < ratings[i] ) {
                tmp = Math.max(candies, tmp) + 1;
            } else {
                tmp += 1;
            }
            ans += tmp;
            candies = 1;
            i = end;
        } else if (i > 0 && ratings[i - 1] < ratings[i]) {
            // increasing rankings
            candies += 1;
            ans += candies;
        } else {
            // same rankings
            candies = 1;
            ans += candies;
        }
    }

    return ans;
};