import { UiElement } from './ui-element';

export abstract class Button extends UiElement {
	private onClick: () => void;

	constructor({ id, onClick }: Button.ConstructorParams) {
		super(id);

		this.onClick = onClick ?? (() => {});
	}

	setOnClick(onClick: Button.OnClick) {
		this.onClick = onClick;
	}

	click() {
		this.onClick();
	}
}

export namespace Button {
	export type ConstructorParams = { id: string; onClick?: OnClick };
	export type OnClick = () => void;
}
