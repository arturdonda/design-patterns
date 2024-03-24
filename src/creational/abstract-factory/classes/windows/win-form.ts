import { Form } from '../../interfaces';

export class WinForm extends Form {
	render(): void {
		this.elements.forEach(e => e.render());

		console.log(`Rendered WinForm ${this.id}`);
	}
}
