import { Command } from '../interfaces';

export class SmartHomeApp {
	private commandMap: { [commandName: string]: Command };

	constructor() {
		this.commandMap = {};
	}

	addCommand(name: string, command: Command) {
		this.commandMap[name] = command;
	}

	removeCommand(name: string) {
		delete this.commandMap[name];
	}

	execute(name: string & keyof typeof this.commandMap) {
		const command = this.commandMap[name];

		if (command === undefined) throw new Error('Command not found');

		command.execute();
	}

	undo(name: string) {
		const command = this.commandMap[name];

		if (command === undefined) throw new Error('Command not found');

		command.undo();
	}
}
