import { LinuxGui, MacGui, WinGui } from './classes';
import os from 'os';

function createGui() {
	switch (os.type()) {
		case 'Linux':
			return new LinuxGui();
		case 'Darwin':
			return new MacGui();
		case 'Windows_NT':
			return new WinGui();
		default:
			throw new Error('Operating System not supported');
	}
}

const gui = createGui();

const form = gui.createLoginForm();

form.render();
