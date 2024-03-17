import { IHouse } from '../interfaces';
import { HouseBuilder } from './house-builder';

export class House implements IHouse {
	readonly bedrooms: number;
	readonly bathrooms: number;
	readonly windows: number;
	readonly hasGarage: boolean;
	readonly hasPool: boolean;
	readonly hasGarden: boolean;

	constructor(builder: HouseBuilder) {
		this.bedrooms = builder.bedrooms;
		this.bathrooms = builder.bathrooms;
		this.windows = builder.windows;
		this.hasGarage = builder.hasGarage;
		this.hasPool = builder.hasPool;
		this.hasGarden = builder.hasGarden;
	}
}
