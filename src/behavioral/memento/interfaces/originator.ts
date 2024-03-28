import { Memento } from './memento';

export interface Originator<T> {
	save(name?: string): Readonly<Memento<T>>;
	restore(memento: Memento<T>): void;
}
