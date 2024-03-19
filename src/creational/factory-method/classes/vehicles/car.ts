import { Coordinates, Vehicle } from '../../interfaces';

export class Car implements Vehicle {
	name = 'Car';

	goTo(coordinates: Coordinates): Promise<void> {
		return new Promise(resolve =>
			setTimeout(() => {
				return resolve();
			}, 1 * 1000)
		);
	}

	pickUp(orderNumber: number) {}

	deliver(orderNumber: number) {}
}
