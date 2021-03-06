import linkedList from './structures/Linkedlist';
import stack from './structures/Stack';
import queue from './structures/Queue';
import twoSum from './problemSolvingTechniques/multiplePointers';
import { areTheseWordsTheSame } from './problemSolvingTechniques/frequencyCounter';

linkedList();
console.log('----------------');
stack();
console.log('----------------');
queue();
console.log('----------------');

console.log('pairs', twoSum([2, 4, 5, 7, 11, 15], 9));
console.log('non working pairs', twoSum([2], 18));

console.log('------------------');

console.log('are these the same ?', areTheseWordsTheSame('cat', 'tac'));
console.log('are these the same ?', areTheseWordsTheSame('cat', 'bat'));

console.log('------------------');
