import { Memento } from './memento';
import { Originator } from './originator';

export class Caretaker<T> {
	private readonly mementos: Memento<T>[];

	constructor(private readonly originator: Originator<T>) {
		this.mementos = [];
	}

	backup(name?: string): void {
		const memento = this.originator.save(name);

		this.mementos.push(memento);

		console.log(`Backup '${memento.name}' completed.`);
	}

	restore(): void {
		const lastMemento = this.mementos.pop();

		if (lastMemento === undefined) return;

		this.originator.restore(lastMemento);

		console.log(`Backup '${lastMemento.name}' restored.`);
	}

	listBackups(): void {
		this.mementos.forEach(memento => console.log({ name: memento.name, date: memento.date.toISOString() }));
	}
}
