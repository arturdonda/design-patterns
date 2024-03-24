import { Button } from '../../interfaces';

export class MacButton extends Button {
	render(): void {
		console.log(`Rendered MacButton ${this.id}`);
	}
}
