import { House } from './house';
import { HouseBuilder } from './house-builder';

export class HouseDirector {
	constructor(private readonly builder: HouseBuilder) {}

	buildSimpleHouse(): House {
		return this.builder.setBedrooms(2).setBathrooms(2).setWindows(3).build();
	}

	buildComplexHouse(): House {
		return this.builder.setBedrooms(4).setBathrooms(4).setWindows(8).setHasGarage(true).setHasPool(true).setHasGarden(true).build();
	}
}
