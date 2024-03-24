import { Button } from './button';
import { Form } from './form';
import { Input } from './input';

export abstract class GuiFactory {
	abstract createForm(params: Form.ConstructorParams): Form;
	abstract createButton(params: Button.ConstructorParams): Button;
	abstract createInput(params: Input.ConstructorParams): Input;

	createLoginForm(idPreffix?: string) {
		const preffix = idPreffix ? `${idPreffix}-login` : 'login';

		const loginForm = this.createForm({ id: `${preffix}-form` });
		const usernameInput = this.createInput({ id: `${preffix}-input-username`, label: 'username' });
		const passwordInput = this.createInput({ id: `${preffix}-input-password`, label: 'password' });
		const cancelButton = this.createButton({ id: `${preffix}-btn-cancel` });
		const OkButton = this.createButton({ id: `${preffix}-btn-ok` });

		loginForm.addElement(usernameInput).addElement(passwordInput).addElement(cancelButton).addElement(OkButton);

		return loginForm;
	}
}
