import { Button } from '../../interfaces';

export class WinButton extends Button {
	render(): void {
		console.log(`Rendered WinButton ${this.id}`);
	}
}
