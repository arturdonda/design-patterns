import { Button, Form, GuiFactory, Input } from '../../interfaces';
import { MacButton } from './mac-button';
import { MacForm } from './mac-form';
import { MacInput } from './mac-input';

export class MacGui extends GuiFactory {
	createForm(params: Form.ConstructorParams): Form {
		return new MacForm(params);
	}
	createButton(params: Button.ConstructorParams): Button {
		return new MacButton(params);
	}
	createInput(params: Input.ConstructorParams): Input {
		return new MacInput(params);
	}
}
