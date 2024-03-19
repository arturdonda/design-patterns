import { Coordinates } from './coordinates';

export interface Vehicle {
	name: string;
	goTo: (coordinates: Coordinates) => Promise<void>;
	pickUp: (orderNumber: number) => void;
	deliver: (orderNumber: number) => void;
}
