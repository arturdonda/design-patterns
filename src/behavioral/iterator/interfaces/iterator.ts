export interface Iterator<T> {
	next(...args: [] | [T]): IteratorResult<T>;
	reset(): void;
}

type IteratorResult<T> = {
	value: T;
	done: boolean;
};
