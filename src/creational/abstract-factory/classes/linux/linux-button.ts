import { Button } from '../../interfaces';

export class LinuxButton extends Button {
	render(): void {
		console.log(`Rendered LinuxButton ${this.id}`);
	}
}
