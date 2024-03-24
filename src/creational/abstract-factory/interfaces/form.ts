import { UiElement } from './ui-element';

export abstract class Form extends UiElement {
	protected elements: UiElement[];

	constructor({ id, elements }: Form.ConstructorParams) {
		super(id);
		this.elements = elements ?? [];
	}

	addElement(element: UiElement) {
		this.elements.push(element);

		return this;
	}
}

export namespace Form {
	export type ConstructorParams = { id: string; elements?: UiElement[] };
}
