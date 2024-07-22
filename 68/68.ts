function fullJustify(words: string[], maxWidth: number): string[] {
    let rows: string[][] = [];
    let rowsLength: Map<number, number> = new Map();
    
    let rowIndex = 0;
    rows.push([]);
    rowsLength.set(rowIndex, words[0].length);
    rows[rowIndex].push(words[0]);
    for (let i = 1; i < words.length; i++) {
        if (rowsLength.get(rowIndex) + rows[rowIndex].length + words[i].length > maxWidth) {
            rowIndex++;
            rows.push([]);
            rowsLength.set(rowIndex, words[i].length);
        } else {
            rowsLength.set(rowIndex, rowsLength.get(rowIndex) + words[i].length);
        }
        rows[rowIndex].push(words[i]);
    }

    let ans: string[] = [];
    for (let i = 0; i < rows.length - 1; i++) {
        let line = "";
        let spacesNeeded = maxWidth - rowsLength.get(i);
        let numInRow = rows[i].length;
        let slots = numInRow - 1;
        let remainder = spacesNeeded % slots;
        let spacesInSlot = Math.ceil(spacesNeeded / slots);
        for (let j = 0; j < numInRow - 1; j++) {
            line += rows[i][j] + " ".repeat((remainder === 0 || j < remainder) ? spacesInSlot : (spacesInSlot - 1));
        }

        let lastWord = rows[i][numInRow- 1];
        // console.log(lastWord)
        line += lastWord;
        line += " ".repeat(maxWidth - line.length);

        ans.push(line);
    }

    let lastLine = "";
    let lastRow = rows[rows.length - 1];
    for (let i = 0; i < lastRow.length - 1; i++) {
        lastLine += (lastRow[i] + " ");
    }
    lastLine += lastRow[lastRow.length - 1];
    lastLine += " ".repeat(maxWidth - lastLine.length);
    ans.push(lastLine);

    return ans;
};


function fullJustify(words: string[], maxWidth: number): string[] {
    
    let ans: string[] = [];
    let lineLength = words[0].length;
    let strInline: string[] = [ words[0] ];

    for (let i = 1; i < words.length; i++) {
        if (lineLength + strInline.length + words[i].length > maxWidth) {
            let line = '';
            // let spacesNeeded = maxWidth - lineLength;
            // let remainder = (maxWidth - lineLength) % (strInline.length - 1);
            // let spacesInSlot = Math.ceil((maxWidth - lineLength) / (strInline.length - 1));
            for (let j = 0; j < strInline.length - 1; j++) {
                if (((maxWidth - lineLength) % (strInline.length - 1)) === 0 ||     // distribute spaces evenly
                    j < ((maxWidth - lineLength) % (strInline.length - 1))) {       // strInline[j] is the words on the left
                        line += strInline[j] + ' '.repeat(Math.ceil((maxWidth - lineLength) / (strInline.length - 1)));
                } else {
                        line += strInline[j] + ' '.repeat(Math.ceil((maxWidth - lineLength) / (strInline.length - 1)) - 1);
                }
            }

            let lastWord = strInline[strInline.length- 1];
            line += lastWord;
            line += ' '.repeat(maxWidth - line.length);

            ans.push(line);
            strInline = [ words[i] ];
            lineLength = words[i].length;
        } 
        else if (i === words.length - 1) {
            strInline.push(words[i]);
            let line = '';
            for (let i = 0; i < strInline.length - 1; i++) {
                line += (strInline[i] + ' ');
            }
            line += strInline[strInline.length - 1];
            line += ' '.repeat(maxWidth - line.length);
            ans.push(line);

            strInline = [];
        }
        else {
            lineLength += words[i].length;
            strInline.push(words[i]);
        }
    }

    if (strInline.length > 0) {
        let line = '';
        for (let i = 0; i < strInline.length - 1; i++) {
            line += (strInline[i] + ' ');
        }
        line += strInline[strInline.length - 1];
        line += ' '.repeat(maxWidth - line.length);
        ans.push(line);
    }

    return ans;
};