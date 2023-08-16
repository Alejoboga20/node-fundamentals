const launches = new Map();

const launch = {
	flightNumber: 100,
	mission: 'Kepler Exploration X',
	rocket: 'Explorer IS1',
	destination: 'Kepler-442 b',
	customers: ['NASA', 'ZTM'],
	launchDate: new Date('December 27, 2030'),
	upcoming: true,
	success: true,
};

launches.set(launch.flightNumber, launch);

export const getAllLaunches = () => Array.from(launches.values());
