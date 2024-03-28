export class Memento<T> {
	constructor(readonly name: string, readonly date: Date, readonly state: T) {}
}
