import { Address, UserDeep, UserShallow } from './classes';

const address = new Address('Not Found Street', 404);

// Shallow Clonning
const shallowUser1 = new UserShallow('John Doe', 'john_doe@gmail.com', address);

const shallowUser2 = shallowUser1.clone();

shallowUser1.address.houseNumber = 500;

console.log('Shallow Clonning:', shallowUser1.address === shallowUser2.address); // true

// Deep Clonning
const deepUser1 = new UserDeep('John Doe', 'john_doe@gmail.com', address);

const deepUser2 = deepUser1.clone();

deepUser1.address.houseNumber = 500;

console.log('Deep Clonning:', deepUser1.address === deepUser2.address); // false
