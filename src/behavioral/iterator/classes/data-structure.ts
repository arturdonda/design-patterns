import { DefaultIterator } from './iterators';
import { Iterable } from '../interfaces';

export class CustomDataStructure extends Iterable<string> {
	private data: string[];

	constructor() {
		super();
		this.data = [];
		this.setIterator(new DefaultIterator(this));
	}

	addItem(...data: string[]) {
		data.forEach(d => this.data.push(d));
	}

	get items() {
		return this.data;
	}

	get size() {
		return this.data.length;
	}
}
