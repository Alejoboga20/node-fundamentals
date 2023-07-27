import express from 'express';
import cors from 'cors';
import planetsRouter from './routes/planets/planets.router';

/* Init Express Application */
const app = express();
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());

/* Routing */
app.use('/api/v1/planets', planetsRouter);

export default app;
