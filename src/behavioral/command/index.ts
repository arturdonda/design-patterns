import { SmartDevicePowerCommand, SmartHomeApp, SmartLight, SmartLightIntensityCommand } from './classes';

// Receivers
const bedroomLight = new SmartLight('Bedroom Light');
const bathroomLight = new SmartLight('Bathroom Light');

// Commands
const bedroomLightPowerCommand = new SmartDevicePowerCommand(bedroomLight);
const bedroomLightIntensityCommand = new SmartLightIntensityCommand(bedroomLight, 10);

const bathroomLightPowerCommand = new SmartDevicePowerCommand(bathroomLight);
const bathroomLightIntensityCommand = new SmartLightIntensityCommand(bathroomLight, 10);

// Invoker
const smartHomeApp = new SmartHomeApp();

smartHomeApp.addCommand('Bedroom Ligth: Power', bedroomLightPowerCommand);
smartHomeApp.addCommand('Bedroom Ligth: Intensity', bedroomLightIntensityCommand);

smartHomeApp.addCommand('Bathroom Ligth: Power', bathroomLightPowerCommand);
smartHomeApp.addCommand('Bathroom Ligth: Intensity', bathroomLightIntensityCommand);

smartHomeApp.execute('Bedroom Ligth: Power');
smartHomeApp.execute('Bathroom Ligth: Power');

smartHomeApp.undo('Bathroom Ligth: Intensity');
smartHomeApp.undo('Bathroom Ligth: Intensity');
smartHomeApp.undo('Bathroom Ligth: Intensity');
smartHomeApp.execute('Bathroom Ligth: Intensity');

smartHomeApp.undo('Bathroom Ligth: Power');
smartHomeApp.undo('Bedroom Ligth: Power');
