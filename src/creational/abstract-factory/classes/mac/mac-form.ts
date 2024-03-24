import { Form } from '../../interfaces';

export class MacForm extends Form {
	render(): void {
		this.elements.forEach(e => e.render());

		console.log(`Rendered MacForm ${this.id}`);
	}
}
