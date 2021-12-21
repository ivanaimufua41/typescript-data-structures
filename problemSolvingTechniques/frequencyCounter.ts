/*
    used to compare multiple values with nested for loops this is o(n**2)
    if its a string comparing how many times a certain letter shows up or number or data type
    in the example from udemy same was a function that takes in 2 arrays and
    we had to check if all the values from the second array are squared values of the items in the first array
    looping through keys.

    My assumption is that this is a hashtable
     
*/

interface IFrequency {
    [key: string]: number;
}

const areTheseWordsTheSame = (
    firstWord: string,
    secondWord: string,
): boolean => {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    let frequencyCounter1: IFrequency = {};
    let frequencyCounter2: IFrequency = {};

    for (let val of firstWord) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of secondWord) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
};

export { areTheseWordsTheSame };
