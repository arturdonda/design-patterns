import { Memento, Originator } from '../interfaces';
import { TextEditorMemento } from './text-editor-memento';

export class TextEditor implements Originator<TextEditor> {
	private lines: string[];

	constructor() {
		this.lines = [];
	}

	save(name?: string): Readonly<Memento<TextEditor>> {
		const now = new Date();

		const memento = new TextEditorMemento(name ?? now.toISOString(), now, this.clone());

		return memento;
	}

	restore(memento: Memento<TextEditor>): void {
		this.lines = memento.state.lines;
	}

	writeLine(line: string) {
		this.lines.push(line);
	}

	readDocument() {
		const document = this.lines.join('\n');

		console.log(document);
	}

	private clone() {
		const clone = new TextEditor();

		clone.lines = Array.from(this.lines);

		return clone;
	}
}
