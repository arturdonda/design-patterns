import { Command, SmartDevice } from '../interfaces';

export class SmartDevicePowerCommand extends Command {
	constructor(private readonly device: SmartDevice) {
		super();
	}

	execute(): void {
		this.device.turnOn();
		console.log(`${this.device.name} is ${this.device.state}.`);
	}

	undo(): void {
		this.device.turnOff();
		console.log(`${this.device.name} is ${this.device.state}.`);
	}
}
