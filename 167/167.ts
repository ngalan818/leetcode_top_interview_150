function twoSum(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1;

    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        }

        if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }

    return [0, 0];
};