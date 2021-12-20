import { WriteStream, createWriteStream } from 'fs';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    practice();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

interface ITotalPairs {
    [key: string]: number;
}

function sockMerchant(n: number, ar: number[]): number {
    const totalPairs: ITotalPairs = {};
    let totalValue = 0;

    if (n > ar.length) {
        return totalValue;
    }

    if (ar.length > 0) {
        for (let i = 0; i < ar.length; i++) {
            if (totalPairs.hasOwnProperty(ar[i].toString())) {
                totalPairs[ar[i]] += 1;
            } else {
                totalPairs[ar[i]] = 1;
            }
        }
    }

    const totalKeys = Object.keys(totalPairs);
    if (totalKeys.length > 0) {
        for (let i = 0; i < totalKeys.length; i++) {
            if (totalPairs[totalKeys[i]] > 1) {
                if (totalPairs[totalKeys[i]] % 2 === 0) {
                    totalValue += totalPairs[totalKeys[i]] / 2;
                } else {
                    totalValue += 2 % totalPairs[totalKeys[i]];

                }
            }
        }
    }

    return totalValue;
}

const practice = () => {
    const ws: WriteStream = createWriteStream('./text.txt');

    const n: number = 9;

    const ar: number[] = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

    const result: number = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
};

export default practice;
