import { MyDataStructure } from '../data-structure';
import { Iterator } from '../../interfaces/iterator';

export class DefaultIterator implements Iterator<string> {
	private index = 0;

	constructor(private readonly dataStructure: MyDataStructure) {
		this.reset();
	}

	reset() {
		this.index = 0;
	}

	next(): { value: string; done: boolean } {
		const value = this.dataStructure.items[this.index];
		const done = this.index >= this.dataStructure.size;

		this.index++;

		return { value, done };
	}
}
