import { Coordinates, Vehicle } from '.';

export abstract class DeliveryApp {
	protected abstract createVehicle(): Vehicle;

	async pickUp({ restaurantLocation, clientLocation, orderNumber }: DeliveryApp.PickUp.Params): DeliveryApp.PickUp.Result {
		const vehicle = this.createVehicle();

		console.log(`${vehicle.name} is on the way to the restaurant.`);
		await vehicle.goTo(restaurantLocation);

		vehicle.pickUp(orderNumber);
		console.log(`${vehicle.name} picked up the order ${orderNumber}.`);

		console.log(`${vehicle.name} is on the way to the client.`);
		await vehicle.goTo(clientLocation);

		vehicle.deliver(orderNumber);
		console.log(`${vehicle.name} delivered the order ${orderNumber}.`);
	}
}

export namespace DeliveryApp {
	export namespace PickUp {
		export type Params = { restaurantLocation: Coordinates; clientLocation: Coordinates; orderNumber: number };
		export type Result = Promise<void>;
	}
}
