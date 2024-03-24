import { Button, Form, GuiFactory, Input } from '../../interfaces';
import { LinuxButton } from './linux-button';
import { LinuxForm } from './linux-form';
import { LinuxInput } from './linux-input';

export class LinuxGui extends GuiFactory {
	createForm(params: Form.ConstructorParams): Form {
		return new LinuxForm(params);
	}
	createButton(params: Button.ConstructorParams): Button {
		return new LinuxButton(params);
	}
	createInput(params: Input.ConstructorParams): Input {
		return new LinuxInput(params);
	}
}
