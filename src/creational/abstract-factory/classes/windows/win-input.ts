import { Input } from '../../interfaces';

export class WinInput extends Input {
	render(): void {
		console.log(`Rendered WinInput ${this.id}`);
	}
}
