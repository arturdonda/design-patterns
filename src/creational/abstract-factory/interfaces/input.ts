import { UiElement } from './ui-element';

export abstract class Input extends UiElement {
	label: string;
	value: string;
	onChange: (input: string) => void;

	constructor({ id, label, onChange }: Input.ConstructorParams) {
		super(id);

		this.value = '';
		this.label = label ?? '';
		this.onChange = onChange ?? (() => {});
	}

	onInput(input: string) {
		this.onChange(input ?? '');
		this.value += input ?? '';
	}

	setOnChange(onChange: Input.OnChange) {
		this.onChange = onChange;
	}
}

export namespace Input {
	export type ConstructorParams = { id: string; label?: string; onChange?: OnChange };
	export type OnChange = (input: string) => void;
}
