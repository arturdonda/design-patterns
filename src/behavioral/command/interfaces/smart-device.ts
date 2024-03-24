export abstract class SmartDevice {
	public readonly name: string;
	protected _state: 'ON' | 'OFF';

	constructor(name: string) {
		this.name = name;
		this._state = 'OFF';
	}

	get state() {
		return this._state;
	}

	get isOn() {
		return this._state === 'ON';
	}

	turnOn() {
		this._state = 'ON';

		return this.isOn;
	}

	turnOff() {
		this._state = 'OFF';

		return this.isOn;
	}
}
