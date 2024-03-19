import { DeliveryApp, Vehicle } from '../../interfaces';
import { Car } from '../vehicles';

export class CarDelivery extends DeliveryApp {
	protected createVehicle(): Vehicle {
		return new Car();
	}
}
