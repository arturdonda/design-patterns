import { Button, Form, GuiFactory, Input } from '../../interfaces';
import { WinButton } from './win-button';
import { WinForm } from './win-form';
import { WinInput } from './win-input';

export class WinGui extends GuiFactory {
	createForm(params: Form.ConstructorParams): Form {
		return new WinForm(params);
	}
	createButton(params: Button.ConstructorParams): Button {
		return new WinButton(params);
	}
	createInput(params: Input.ConstructorParams): Input {
		return new WinInput(params);
	}
}
