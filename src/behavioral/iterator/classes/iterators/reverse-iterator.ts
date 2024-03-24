import { MyDataStructure } from '../data-structure';
import { Iterator } from '../../interfaces/iterator';

export class ReverseIterator implements Iterator<string> {
	private index = this.dataStructure.size;

	constructor(private readonly dataStructure: MyDataStructure) {
		this.reset();
	}

	reset() {
		this.index = this.dataStructure.size;
	}

	next(): { value: string; done: boolean } {
		this.index--;

		const value = this.dataStructure.items[this.index];
		const done = this.index < 0;

		return { value, done };
	}
}
