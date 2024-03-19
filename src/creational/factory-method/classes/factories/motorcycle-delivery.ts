import { DeliveryApp, Vehicle } from '../../interfaces';
import { Motorcycle } from '../vehicles';

export class MotorcycleDelivery extends DeliveryApp {
	protected createVehicle(): Vehicle {
		return new Motorcycle();
	}
}
