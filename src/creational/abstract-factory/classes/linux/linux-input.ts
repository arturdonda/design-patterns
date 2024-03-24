import { Input } from '../../interfaces';

export class LinuxInput extends Input {
	render(): void {
		console.log(`Rendered LinuxInput ${this.id}`);
	}
}
