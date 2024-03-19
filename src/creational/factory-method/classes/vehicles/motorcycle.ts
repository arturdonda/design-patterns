import { Coordinates, Vehicle } from '../../interfaces';

export class Motorcycle implements Vehicle {
	name = 'Motorcycle';

	goTo(coordinates: Coordinates): Promise<void> {
		return new Promise(resolve =>
			setTimeout(() => {
				return resolve();
			}, 5 * 1000)
		);
	}

	pickUp(orderNumber: number) {}

	deliver(orderNumber: number) {}
}
