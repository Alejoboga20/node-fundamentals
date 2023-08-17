export type Launch = {
	flightNumber: number;
	mission: string;
	rocket: string;
	destination: string;
	customers: string[];
	launchDate: Date;
	upcoming: boolean;
	success: boolean;
};

const launches = new Map();

let latestFlightNumber = 100;

const launch: Launch = {
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

export const existsLaunchWithFlightNumber = (flightNumber: number) => {
	return launches.has(flightNumber);
};

export const getAllLaunches = () => Array.from(launches.values());

export const addNewLaunch = (launch: Launch) => {
	latestFlightNumber++;
	launches.set(
		latestFlightNumber,
		Object.assign(launch, {
			flightNumber: latestFlightNumber,
			customers: ['NASA', 'ZTM'],
			upcoming: true,
			success: true,
		})
	);
};

export const abortLaunch = (flightNumber: number) => {
	const abortedLaunch = launches.get(flightNumber);
	abortedLaunch.upcoming = false;
	abortedLaunch.success = false;

	return abortedLaunch;
};
