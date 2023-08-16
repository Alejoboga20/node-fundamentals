const API_URL = 'http://localhost:8080/api/v1';

async function httpGetPlanets() {
	// Load planets and return as JSON.
	const response = await fetch(`${API_URL}/planets`);
	return await response.json();
}

async function httpGetLaunches() {
	const response = await fetch(`${API_URL}/launches`);
	const launches = await response.json();

	return launches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
	// TODO: Once API is ready.
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
