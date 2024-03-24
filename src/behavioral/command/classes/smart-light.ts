import { SmartDevice } from '../interfaces';

export class SmartLight extends SmartDevice {
	private _intensity: number = 100;

	constructor(name: string) {
		super(name);
	}

	get intensity() {
		return this._intensity;
	}

	increaseIntensity(amount: number) {
		this._intensity = this._intensity + amount > 100 ? 100 : this._intensity + amount;
	}

	decreaseIntensity(amount: number) {
		this._intensity = this._intensity - amount < 0 ? 0 : this._intensity - amount;
	}
}
