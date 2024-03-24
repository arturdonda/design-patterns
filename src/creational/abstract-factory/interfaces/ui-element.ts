export abstract class UiElement {
	constructor(protected readonly id: string) {}

	abstract render(): void;
}
