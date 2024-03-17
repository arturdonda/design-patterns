import { HouseBuilder, HouseDirector } from './classes';

const houseBuilder = new HouseBuilder();
const houseDirector = new HouseDirector(houseBuilder);

const simpleHouse = houseDirector.buildSimpleHouse();
const complexHouse = houseDirector.buildComplexHouse();
