import { House } from './house';

export class HouseBuilder {
	private _bedrooms: number;
	private _bathrooms: number;
	private _windows: number;
	private _hasGarage: boolean;
	private _hasPool: boolean;
	private _hasGarden: boolean;

	constructor() {
		this.reset();
	}

	//#region Getters
	get bedrooms() {
		return this._bedrooms;
	}
	get bathrooms() {
		return this._bathrooms;
	}
	get windows() {
		return this._windows;
	}
	get hasGarage() {
		return this._hasGarage;
	}
	get hasPool() {
		return this._hasPool;
	}
	get hasGarden() {
		return this._hasGarden;
	}
	//#endregion Getters

	//#region Setters
	setBedrooms(bedrooms: number): HouseBuilder {
		this._bedrooms = bedrooms;
		return this;
	}

	setBathrooms(bathrooms: number): HouseBuilder {
		this._bathrooms = bathrooms;
		return this;
	}

	setWindows(windows: number): HouseBuilder {
		this._windows = windows;
		return this;
	}

	setGarage(hasGarage: boolean): HouseBuilder {
		this._hasGarage = hasGarage;
		return this;
	}

	setPool(hasPool: boolean): HouseBuilder {
		this._hasPool = hasPool;
		return this;
	}

	setGarden(hasGarden: boolean): HouseBuilder {
		this._hasGarden = hasGarden;
		return this;
	}
	//#endregion Setters

	reset(): HouseBuilder {
		this._bedrooms = 0;
		this._bathrooms = 0;
		this._windows = 0;
		this._hasGarage = false;
		this._hasPool = false;
		this._hasGarden = false;

		return this;
	}

	build(): House {
		const house = new House(this);

		this.reset();

		return house;
	}
}
