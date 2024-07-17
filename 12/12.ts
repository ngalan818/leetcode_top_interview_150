function intToRoman(num: number): string {
    let ans = "";
    let quotient = Math.floor(num / 1000);
    ans += "M".repeat(quotient);
    num = num % 1000;

    let divisors = [[ "I", "IV", "IX", "V" ], [ "X", "XL", "XC", "L" ], [ "C", "CD", "CM", "D" ]];

    for (let i = 2; i >= 0; i--) {
        let digit = Math.pow(10, i);
        quotient = Math.floor(num / digit);
        if (quotient < 4) {
            ans += divisors[i][0].repeat(quotient);
        } else if (quotient == 4) {
            ans += divisors[i][1];
        } else if (quotient == 9) {
            ans += divisors[i][2];
        } else {
            ans += (divisors[i][3] + divisors[i][0].repeat(quotient - 5));
        }
        num = num % digit;
    }

    return ans;
};

function intToRoman(num: number): string {
    let ans = "";
    let quotient = Math.floor(num / 1000);
    ans += "M".repeat(quotient);
    num = num % 1000;

    quotient = Math.floor(num / 100);
    if (quotient < 4) {
        ans += "C".repeat(quotient);
    } else if (quotient == 4) {
        ans += "CD";
    } else if (quotient == 9) {
        ans += "CM";
    } else {
        ans += ("D" + "C".repeat(quotient - 5));
    }
    num = num % 100;
    

    quotient = Math.floor(num / 10);
    if (quotient < 4) {
        ans += "X".repeat(quotient);
    } else if (quotient == 4) {
        ans += "XL";
    } else if (quotient == 9) {
        ans += "XC";
    } else {
        ans += ("L" + "X".repeat(quotient - 5));
    }
    num = num % 10;

    quotient = num;
    if (quotient < 4) {
        ans += "I".repeat(quotient);
    } else if (quotient == 4) {
        ans += "IV";
    } else if (quotient == 9) {
        ans += "IX";
    } else {
        ans += ("V" + "I".repeat(quotient - 5));
    }

    return ans;
};
