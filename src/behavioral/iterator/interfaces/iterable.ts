import { Iterator } from './iterator';

export abstract class Iterable<T> {
	protected iterator: Iterator<T> | undefined = undefined;

	[Symbol.iterator](): Iterator<T> {
		if (!this.iterator) throw new Error('Iterator not found');

		this.iterator.reset();

		return this.iterator;
	}

	setIterator(iterator: Iterator<T>) {
		this.iterator = iterator;
	}
}
