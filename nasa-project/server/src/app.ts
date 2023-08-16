import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import planetsRouter from './routes/planets/planets.router';
import launchesRouter from './routes/launches/launches.router';

/* Init Express Application */
const app = express();
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

/* Routing */
app.use('/api/v1/planets', planetsRouter);
app.use('/api/v1/launches', launchesRouter);

export default app;
