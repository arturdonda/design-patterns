import { Command } from '../interfaces';
import { SmartLight } from './smart-light';

export class SmartLightIntensityCommand extends Command {
	constructor(private readonly light: SmartLight, private readonly intensity: number) {
		super();
	}

	execute(): void {
		this.light.increaseIntensity(this.intensity);
		console.log(`${this.light.name} is at ${this.light.intensity}% intensity.`);
	}

	undo(): void {
		this.light.decreaseIntensity(this.intensity);
		console.log(`${this.light.name} is at ${this.light.intensity}% intensity.`);
	}
}
