import { CustomDataStructure } from './classes';
import { ReverseIterator } from './classes/iterators';

const customDataStructure = new CustomDataStructure();

customDataStructure.addItem('A', 'B', 'C', 'D', 'E');

const [a, b] = customDataStructure;
console.log('a: ', a);
console.log('b: ', b);

console.log('-----------------');

for (const item of customDataStructure) {
	console.log('item: ', item);
}

customDataStructure.setIterator(new ReverseIterator(customDataStructure));

console.log('-----------------');

for (const item of customDataStructure) {
	console.log('item: ', item);
}
