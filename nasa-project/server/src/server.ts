import http from 'http';

import app from './app';
import { loadPlanetsData } from './models/planets.model';

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const startServer = async () => {
	await loadPlanetsData();
	server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
