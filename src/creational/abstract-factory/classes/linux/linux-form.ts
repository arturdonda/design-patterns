import { Form } from '../../interfaces';

export class LinuxForm extends Form {
	render(): void {
		this.elements.forEach(e => e.render());

		console.log(`Rendered LinuxForm ${this.id}`);
	}
}
