import { CarDelivery, MotorcycleDelivery } from './classes';
import { DeliveryApp } from './interfaces';

class Client {
	private readonly deliveryApp: DeliveryApp;

	constructor(deliveryVehicle: 'car' | 'motorcycle') {
		this.deliveryApp = deliveryVehicle === 'car' ? new CarDelivery() : new MotorcycleDelivery();
	}

	deliver(params: DeliveryApp.PickUp.Params) {
		this.deliveryApp.pickUp(params);
	}
}

const client = new Client('car');

client.deliver({
	restaurantLocation: { lat: 0, lon: 0 },
	clientLocation: { lat: 10, lon: 10 },
	orderNumber: 123,
});
